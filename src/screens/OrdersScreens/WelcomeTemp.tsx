import { useContext } from "react";
import { Text, View } from "react-native";
import { AuthContext } from "../../contexts/authentication/AuthContext";
import { useAsyncStorage } from "../../hooks/authentication/useAsyncStorage";

export const WelcomeTemp = () => {
  const { loginState } = useContext(AuthContext);
  const { value } = useAsyncStorage();

  console.log("welcome screen", loginState);

  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Bienvenue ! {value} </Text>
      </View>
    </>
  );
};
