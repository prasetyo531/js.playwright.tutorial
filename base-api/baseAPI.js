import { request } from "playwright";
import dotenv from 'dotenv';

dotenv.config();

class BaseAPI {
  constructor() {
    this.context = null;
    this.baseURL = process.env.BASE_URL;
  }

  async init() {
    this.context = await request.newContext();
  }

  async get(endpoint) {
    const response = await fetch(`${this.baseURL}${endpoint}`);
    return response;
  }

  async post(endpoint, data) {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response;
  }
  // Add more methods (put, delete, etc.) as needed
}

export default BaseAPI;
