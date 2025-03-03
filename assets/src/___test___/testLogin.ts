import { LoginUseCase } from "./../domain/usecases/LoginUseCase";
import { LoginRepo } from "../data/repository/LoginRepo";
import { LoginResponse } from "../domain/models/LoginResponse";

// ---------- TẦNG 3 ----------
// implements - từ - LoginRepo
class MockLoginRepo implements LoginRepo {
  async login(email: string, password: string): Promise<LoginResponse> {
    return {
      token: "654321",
      username: "tuantran86",
    };
  }
}

// ---------- TẦNG 4 ----------
// test("testLogin", () => {
//   let loginUseCase = new LoginUseCase(new MockLoginRepo()); // NEW
//   loginUseCase.login(); // TẦNG 4
// });
