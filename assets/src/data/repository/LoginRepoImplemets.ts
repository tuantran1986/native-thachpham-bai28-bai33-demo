import { injectable } from "inversify";
import "reflect-metadata";
import { LoginResponse } from "../../domain/models/LoginResponse";
import { LoginApiClient } from "../api/LoginApiClient";
import { LoginRepo } from "./LoginRepo";

// ------------------- TẦNG 3 -------------------

// LoginRepoImplemets : OVERRIDE lai METHOD = "login"
@injectable()
export class LoginRepoImplemets implements LoginRepo {
  login(username: string, password: string): Promise<LoginResponse> {
    let loginApi = new LoginApiClient(); // TẦNG 2 - tạo ĐỐI TƯỢNG = NEW
    return loginApi.login(username, password); // sử dụng hàm CALL API: LOGIN() viết ở TẦNG 2
  }
}
