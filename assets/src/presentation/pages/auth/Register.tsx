import { useNavigation } from "@react-navigation/native";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function RegisterPage() {
  const navigation = useNavigation(); // cydb - điều hướng = useNavigation

  // ------------ render ------------
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "white", padding: 20, width: "96%" }}>
        <TextInput placeholder="UserName" />
        <TextInput placeholder="Email" />
        <TextInput placeholder="PassWord" />
        <Button
          title="Submit"
          onPress={() => {
            navigation.navigate("login"); // điều hướng ĐẾN TRANG = navigate("name")
          }}
        />
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
