import "react-native-gesture-handler"; // CYDB - phải import ở đầu
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "../pages/auth/Login";
import RegisterPage from "../pages/auth/Register";

const Stack = createStackNavigator(); // xếp chồng các màn hình

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Ẩn header mặc định
        }}
      >
        <Stack.Screen name="auth" component={AuthNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function AuthNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // Ẩn header mặc định
      }}
    >
      <Stack.Screen name="login" component={LoginPage} />
      <Stack.Screen name="register" component={RegisterPage} />
    </Stack.Navigator>
  );
}
