import { useContext } from "react";
import { View, Text, Button } from "react-native";
import { LoginForm } from "../../../components/forms/LoginForm";
import { AuthContext } from "../../../contexts/authentication/AuthContext";
import { loginScreenStyle as style } from "./style/loginScreen.style";

export const LoginScreen = () => {
  const { loginState } = useContext(AuthContext);
  return (
    <>
      <View style={style.container}>
        {loginState.isLoading && <Text>Loading...</Text>}
        <Text>Bienvenue</Text>
        <LoginForm />
      </View>
    </>
  );
};




