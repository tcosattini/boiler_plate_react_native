import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "./src/screens/AuthenticationScreens/LoginScreen/LoginScreen";
import { AuthContext } from "./src/contexts/authentication/AuthContext";
import { useUser } from "./src/hooks/authentication";

const Stack = createNativeStackNavigator();
export default function App() {
  const { user } = useUser();
  return (
    <AuthContext.Provider value={{ user }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
