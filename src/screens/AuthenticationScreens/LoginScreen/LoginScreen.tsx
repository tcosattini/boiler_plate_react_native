import { useContext } from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "../../../contexts/authentication/AuthContext";
import { loginScreenStyle as style } from "./style/loginScreen.style";

export const LoginScreen = () => {
  const { loginState, login } = useContext(AuthContext);

  return (
    <>
      <View style={style.container}>
        {loginState.isLoading && <Text>Loading...</Text>}
        {loginState.error && <Text>{loginState.error}</Text>}
        <Text>Login</Text>

        <Button
          onPress={() =>
            login({
              username: "communication@chr365.fr",
              password: "password",
            })
          }
          title="Login"
          color="#842584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </>
  );
};
