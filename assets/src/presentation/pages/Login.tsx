import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function LoginPage() {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "white", padding: 20, width: "96%" }}>
        <TextInput placeholder="UserName" />
        <TextInput placeholder="PassWord" />
        <Button
          title="Login"
          onPress={() => {
            Alert.alert("LOGIN");
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
