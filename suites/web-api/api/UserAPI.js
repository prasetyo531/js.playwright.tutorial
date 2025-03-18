import BaseAPI from "@base-api/baseAPI";

class UserAPI extends BaseAPI {
  constructor() {
    super();
    this.baseUrl = "https://reqres.in/api/users"; // Replace with your API base URL
  }

  async getUser(userId) {
    return await this.get(`${this.baseUrl}/${userId}`);
  }
}

export default UserAPI;