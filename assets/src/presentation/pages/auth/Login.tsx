import { useNavigation } from "@react-navigation/native";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function LoginPage() {
  const navigation = useNavigation(); // cydb - điều hướng = useNavigation

  // ------------ RENDER ------------
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "white", padding: 20, width: "96%" }}>
        <TextInput placeholder="UserName" />
        <TextInput placeholder="PassWord" />
        <Button
          title="Login"
          onPress={() => {
            // TH1 = "NAVIGATE" : BACK bị nhảy vào trang LOGIN
            // navigation.navigate("inApp"); // CYDB = điều hướng ĐẾN CỤM = "inApp"
            // TH2 = "REPLACE" : BACK sẽ thoát ra khỏi APP
            navigation.replace("inApp"); // CYDB = điều hướng ĐẾN CỤM = "inApp"
          }}
        />
        <Text
          onPress={() => {
            navigation.navigate("register"); // điều hướng ĐẾN TRANG = "register"
          }}
        >
          Register
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#46cdfa",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
