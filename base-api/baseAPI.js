import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

class BaseAPI {
  constructor() {
    this.client = axios.create({
      baseURL: process.env.BASE_URL, // Use the base URL from the .env file
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async get(endpoint) {
    return await this.client.get(endpoint);
  }

  async post(endpoint, data) {
    return await this.client.post(endpoint, data);
  }

  async put(endpoint, data) {
    return await this.client.put(endpoint, data);
  }

  async delete(endpoint) {
    return await this.client.delete(endpoint);
  }
}

export default BaseAPI;
