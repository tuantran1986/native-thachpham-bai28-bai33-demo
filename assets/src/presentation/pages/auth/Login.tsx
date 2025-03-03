import { useNavigation } from "@react-navigation/native";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { LoginRepoImplemets } from "../../../data/repository/LoginRepoImplemets";
import { useState } from "react";
import "reflect-metadata";
import container from "../../../dependenciesInjection/dependencies";

export default function LoginPage() {
  const navigation = useNavigation(); // cydb - điều hướng = useNavigation

  // ------------------- TẦNG 4 = VIEW - tạo INSTANCE + gọi method LOGIN -------------------
  // CÁCH 1: LOGIN sử dụng từ khóa "NEW tạo INSTANCE": bị tốn bộ nhớ, khó quản lý, khó maintain
  // let loginRepo = new LoginRepoImplemets(); // tạo OBJECT = từ khóa "NEW"
  // CÁCH 2: LOGIN lấy OBJECT = LOGIN REPO - từ CONTAINER ra để sử dụng
  let loginRepo = container.get<LoginRepoImplemets>("LoginRepoImplemets"); // lấy OBJECT = từ trong "CONTAINER"

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // ------------ RENDER ------------
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "white", padding: 20, width: "96%" }}>
        <TextInput placeholder="UserName" onChangeText={setUsername} />
        <TextInput placeholder="PassWord" onChangeText={setPassword} />
        <Button
          title="Login"
          onPress={() => {
            // ------------------- TẦNG 4 = VIEW - tạo INSTANCE + gọi method LOGIN -------------------
            // --- sử dụng METHOD - LOGIN - trong OBJECT = LOGIN REPO
            loginRepo.login(username, password);

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
