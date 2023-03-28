import { useContext } from "react";
import { Text } from "react-native";
import { AuthContext } from "../../contexts/authentication/AuthContext";
import { useAsyncStorage } from "../../hooks/authentication/useAsyncStorage";

export const WelcomeTemp = () => {
  const { loginState } = useContext(AuthContext);
  const { value } = useAsyncStorage();

  console.log("welcome screen", loginState);
  return <Text>Bienvenue ! {value} </Text>;
};
