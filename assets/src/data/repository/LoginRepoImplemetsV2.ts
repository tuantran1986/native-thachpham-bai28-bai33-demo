import { injectable } from "inversify";
import "reflect-metadata";
import { LoginResponse } from "../../domain/models/LoginResponse";
import { LoginRepo } from "./LoginRepo";

// ========= CYDB:  "DEPENDENCIES - DỄ MAINTAIN" : "LoginRepoImplemetsV2" =========

// ------------------- TẦNG 3 -------------------
// LoginRepoImplemets : OVERRIDE lai METHOD = "login"
// @injectable()
export class LoginRepoImplemetsV2 implements LoginRepo {
  // ===== "DEPENDENCIES - DỄ MAINTAIN" : sửa lại LOGIC ở đây =====
  // ===== "DEPENDENCIES - DỄ MAINTAIN" : sửa lại LOGIC ở đây =====
  // ===== "DEPENDENCIES - DỄ MAINTAIN" : sửa lại LOGIC ở đây =====
  async login(username: string, password: string): Promise<LoginResponse> {
    console.log("----------- LoginRepoImplemets-V2 -----------");
    alert(
      `----- LOGIN - V2 = VERSION 2: username = ${username}; password = ${password} ----- `
    );
    return {};
  }
}
