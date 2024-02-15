import apiService from "./api-service.js";


class AuthService {
  async getToken() {
    let client_id = 31550986;
    const url = `/token/${client_id}`;
    return await apiService.get(url)
  }
}

export default new AuthService();