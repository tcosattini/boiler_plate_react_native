import { Text, View } from "react-native";
import { splashScreenStyle as style } from "./style/splashScreen.style";

export const SplashScreen = () => {
  return (
    <View style={style.container}>
      <Text>SplashScreen 👋</Text>
    </View>
  );
};
