import { LoginResponse } from "../../domain/models/LoginResponse";

// ------------------- TẦNG 2 -------------------

// ======= ĐÚNG RA – 1 PROJECT THỰC TẾ : phải viết DEPENDENCIES INJECTION : có tạo ra 1 đối tượng AXIOS để CALL API:
// 	Phải viết AXIOS.
// 	Viết dạng DEPENDENCIES INJECTION

// ======= ĐỂ DEMO NHANH : viết như dưới đây.
export class LoginApiClient {
  // +++++++++++ +++++++++++++++++++++++++++++++++ +++++++++++
  // ++++++++++++ CYDB - ĐỊNH NGHĨA RÕ - HÀM LOGIN +++++++++++
  // +++++++++++ +++++++++++++++++++++++++++++++++ +++++++++++
  async login(username: string, password: string): Promise<LoginResponse> {
    // ----- "call api = AXIOS chỗ này" -----
    // ----- "call api = AXIOS chỗ này" -----
    // ----- "call api = AXIOS chỗ này" -----
    alert(
      `++++++++ LOGIN - V1 = VERSION 1:: username = ${username}; password = ${password} ++++++++`
    );

    return {
      token: "123456",
      userInfo: {
        name: "xxx",
        email: "xxx",
        address: "xxx",
      },
    };
  }
}
