import { LoginRepo } from "../../data/repository/LoginRepo";

export class LoginUseCase {
  private loginRepo: LoginRepo;
  constructor(loginRepo: LoginRepo) {
    this.loginRepo = loginRepo;
  }

  login() {
    console.log("--- RUN - LOGIN USECASE ---");
  }
}
