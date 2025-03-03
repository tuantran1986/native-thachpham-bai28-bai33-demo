import { LoginResponse } from "../../domain/models/LoginResponse";

// ------------------- TẦNG 1 -------------------

// khung - interface : có method LOGIN - các IMPLEMENTATION cần OVERRIDE lại
interface LoginRepo {
  login(username: string, password: string): Promise<LoginResponse>;
}

export { LoginRepo };
