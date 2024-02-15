import apiService from "./api-service.js";
import {useAuthStore} from "../stores/AuthStore.js";

class ContactsService {
  constructor() {
  }

  async createContact() {
    this.authStore = useAuthStore();

    const url = '/contacts';

    const data = {
      base_domain: this.authStore.base_domain,
      token: this.authStore.token,
      contacts: [
        {
          "name": "Контакт для примера 1",
        }
      ]
    }
    return await apiService.post(url, data);
  }
}

export default new ContactsService();