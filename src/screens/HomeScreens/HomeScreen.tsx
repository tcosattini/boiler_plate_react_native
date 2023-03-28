import { useContext } from "react";
import { AuthContext } from "../../contexts/authentication/AuthContext";
import { WelcomeTemp } from "../OrdersScreens/WelcomeTemp";
import { LoginScreen } from "../AuthenticationScreens/LoginScreen/LoginScreen";

export const HomeScreen = () => {
  const { loginState } = useContext(AuthContext);

  return <>{loginState.isSignedIn ? <WelcomeTemp /> : <LoginScreen />}</>;
};
