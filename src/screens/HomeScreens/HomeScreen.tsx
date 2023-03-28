import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authentication/AuthContext";
import { WelcomeTemp } from "../OrdersScreens/WelcomeTemp";
import { LoginScreen } from "../AuthenticationScreens/LoginScreen/LoginScreen";

export const HomeScreen = () => {
  const { loginState } = useContext(AuthContext);
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Navigator>
        {loginState.isSignedIn ? (
          <>
            <Stack.Screen name="login_screen" component={WelcomeTemp} />
          </>
        ) : (
          <>
            <Stack.Screen name="home_screen" component={LoginScreen} />
          </>
        )}
      </Stack.Navigator>
    </>
  );
};
