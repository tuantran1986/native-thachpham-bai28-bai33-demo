import { Container } from "inversify";
import { LoginRepo } from "../data/repository/LoginRepo";
import { LoginRepoImplemets } from "../data/repository/LoginRepoImplemets";
import { LoginUseCase } from "../domain/usecases/LoginUseCase";
import { LoginRepoImplemetsV2 } from "../data/repository/LoginRepoImplemetsV2";

// 1. Container - lấy từ - INVERSIFY
const container = new Container();

// 2. TẠO INSTANCE : new LoginRepoImplemets() -> BIND vào CONTAINER.
const LoginRepoImplemetsInstance = new LoginRepoImplemets();
// const LoginRepoImplemetsInstance = new LoginRepoImplemetsV2(); // sửa login - nhanh !

// 3. BIND vào CONTAINER
container
  .bind<LoginRepoImplemets>("LoginRepoImplemets")
  .toConstantValue(LoginRepoImplemetsInstance);
container
  .bind<LoginUseCase>("LoginUseCase")
  .toConstantValue(new LoginUseCase(LoginRepoImplemetsInstance));

export default container;
