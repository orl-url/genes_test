import apiService from "./api-service.js";
import {useAuthStore} from "../stores/AuthStore.js";

class CompaniesService {
  constructor() {
  }

  async createCompany() {
    this.authStore = useAuthStore();

    const url = '/companies';

    const data = {
      base_domain: this.authStore.base_domain,
      token: this.authStore.token,
      companies: [
        {
          "name": "Компания для примера 1",
        }
      ]
    }
    return await apiService.post(url, data);
  }
}

export default new CompaniesService();