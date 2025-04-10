import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

class BaseAPI {
  constructor() {
    this.client = axios.create({
      baseURL: process.env.BASE_URL, // Use the base URL from the .env file
    });

    // Add a response interceptor
    this.client.interceptors.response.use(
      (response) => {
        // Handle the response data
        console.log("Response:", response.data); // Log the response data
        return response.data; // Return the response data
      },
      (error) => {
        // Handle errors
        console.error(
          "Error Response:",
          error.response ? error.response.data : error.message
        );
        return Promise.reject(error); // Reject the promise with the error
      }
    );
  }

  isFormData(data) {
    return data instanceof FormData;
  }

  async get(endpoint, config = {}) {
    return this.client.get(endpoint, config);
  }

  async post(endpoint, data, config = {}) {
    // Set Content-Type based on data type
    if (!this.isFormData(data)) {
      config.headers = {
        ...config.headers,
        "Content-Type": "application/json",
      };
    }

    return this.client.post(endpoint, data, config);
  }

  async put(endpoint, data, config = {}) {
    // Set Content-Type based on data type
    if (!this.isFormData(data)) {
      config.headers = {
        ...config.headers,
        "Content-Type": "application/json",
      };
    }

    return this.client.put(endpoint, data, config);
  }

  async delete(endpoint, config = {}) {
    return this.client.delete(endpoint, config);
  }
}

export default BaseAPI;
