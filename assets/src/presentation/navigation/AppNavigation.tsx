import "react-native-gesture-handler"; // CYDB - phải import ở đầu
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "../pages/auth/Login";
import RegisterPage from "../pages/auth/Register";
import HomePage from "../pages/inApp/Home";
import PostsPage from "../pages/inApp/Posts";
import ProfilePage from "../pages/inApp/Profile";
import SettingPage from "../pages/inApp/Setting";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator(); // STACK: xếp chồng các màn hình
const tab = createBottomTabNavigator(); // TAB: dàn hàng - các tab dưới màn hình - song song nhau

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Ẩn header mặc định
        }}
      >
        {/* name="auth" : chứa các "MÀN" = STACK xếp chồng lên nhau : LOGIN, REGISTER */}
        <Stack.Screen name="auth" component={AuthNavigation} />
        {/* name="inApp" : chứa các "TAB": HOME, POSTS, PROFILE, SETTING */}
        <Stack.Screen name="inApp" component={InAppNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function AuthNavigation() {
  // STACK: xếp chồng các màn hình
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

function InAppNavigation() {
  // TAB: dàn hàng - các tab dưới màn hình - song song nhau
  return (
    <tab.Navigator
      screenOptions={{
        headerShown: false, // Ẩn header mặc định
      }}
    >
      <tab.Screen name="home" component={HomePage} />
      <tab.Screen name="posts" component={PostsPage} />
      <tab.Screen name="profile" component={ProfilePage} />
      <tab.Screen name="setting" component={SettingPage} />
    </tab.Navigator>
  );
}
