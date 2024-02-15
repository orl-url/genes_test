import apiService from "./api-service.js";
import {useAuthStore} from "../stores/AuthStore.js";

class LeadsService {
  constructor() {
  }

  async createLead() {
    this.authStore = useAuthStore();

    const url = '/leads';

    const data = {
      base_domain: this.authStore.base_domain,
      token: this.authStore.token,
      leads: [
        {
          "name": "Сделка для примера 1",
        }
      ]
    }
    return await apiService.post(url, data);
  }
}

export default new LeadsService();