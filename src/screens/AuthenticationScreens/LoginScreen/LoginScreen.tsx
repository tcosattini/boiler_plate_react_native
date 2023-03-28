import { useContext } from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "../../../contexts/authentication/AuthContext";
import { useAuth } from "../../../hooks/authentication/useAuth";

export const LoginScreen = () => {
  const { loginState, login } = useContext(AuthContext);

  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {loginState.isLoading && <Text>Loading...</Text>}
        {loginState.error && <Text>{loginState.error}</Text>}
        <Text>test</Text>

        <Button
          onPress={() =>
            login({
              username: "",
              password: "",
            })
          }
          title="test"
          color="#842584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </>
  );
};
