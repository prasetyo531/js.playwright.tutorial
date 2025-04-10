import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

class BaseAPI {
  constructor() {
    this.client = axios.create({
      baseURL: process.env.BASE_URL, // Use the base URL from the .env file
    });
  }

  isFormData(data) {
    return data instanceof FormData;
}

  async get(endpoint) {
    return await this.client.get(endpoint);
  }

  async post(endpoint, data) {
    const config = {
      headers: {
        "Content-Type": this.isFormData(data) ? undefined : "application/json", // Automatically set for FormData
      },
    };

    const response = await this.client.post(endpoint, data, config);
    return response.data; // Return the parsed JSON data
  }

  async put(endpoint, data) {
    return await this.client.put(endpoint, data);
  }

  async delete(endpoint) {
    return await this.client.delete(endpoint);
  }
}

export default BaseAPI;
