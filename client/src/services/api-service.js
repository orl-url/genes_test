import axios from "axios";

class ApiService {

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "http://localhost:3000",
    });

  }

  async get(url) {
    try {
      const result = await this.axiosInstance.get(url);
      return {
        isSuccess: true,
        data: result.data
      };
    } catch (error) {
      return this.handleError(error);
    }
  }


  async post(url, data) {
    try {
      const result = await this.axiosInstance.post(url, data);
      return {
        isSuccess: true,
        data: result.data
      };
    } catch (error) {
      return this.handleError(error);

    }
  }

  handleError(error) {
    if (axios.isAxiosError(error)) {
      return {
        isSuccess: false,
        error: error.message
      };
    } else {
      return {
        isSuccess: false,
        error: error
      };
    }
  }
}

export default new ApiService();