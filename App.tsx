import { NavigationContainer } from "@react-navigation/native";
import { AuthContextProvider } from "./src/contexts/authentication/AuthContext";

import { HomeScreen } from "./src/screens/HomeScreens/HomeScreen";

export default function App() {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
    </AuthContextProvider>
  );
}




