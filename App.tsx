import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { AuthContextProvider } from "./src/contexts/authentication/AuthContext";
import { useAppLoading } from "./src/hooks/appLoading/useAppLoading";
import { useState } from "react";
import { HomeScreen } from "./src/screens/HomeScreens/HomeScreen";
import { SplashScreen } from "./src/screens/SplashScreens/SplashScreen";

export default function App() {
  const [appIsReady, setAppIsReady] = useState<AppState["appIsReady"]>(false);
  const { prepare } = useAppLoading();
  useEffect(() => {
    prepare({ setAppState: setAppIsReady });
  }, []);

  return (
    <AuthContextProvider>
      <NavigationContainer>
        {appIsReady ? <HomeScreen /> : <SplashScreen />}
      </NavigationContainer>
    </AuthContextProvider>
  );
}




