import { StyleSheet, Text, View } from "react-native";

export default function SettingPage() {
  return (
    <View style={styles.container}>
      <Text>SettingPage</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
