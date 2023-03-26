import { View, Text } from "react-native";
import { useUser } from "../../../hooks";

export const LoginScreen = () => {
  const { user } = useUser();
  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {user && <Text>{user.email}</Text>}
      </View>
    </>
  );
};
