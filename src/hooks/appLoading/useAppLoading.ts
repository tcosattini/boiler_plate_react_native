import * as Font from "expo-font";
import Entypo from "@expo/vector-icons/Entypo";

type Props = {
  setAppState: (appState: boolean) => void;
};

export const useAppLoading = () => {
  async function prepare({ setAppState }: Props) {
    try {
      // Pre-load fonts, make any API calls you need to do here
      await Font.loadAsync(Entypo.font);
      // Artificially delay for two seconds to simulate a slow loading
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (e) {
      console.warn(e);
    } finally {
      setAppState(true);
    }
  }
  return { prepare };
};
