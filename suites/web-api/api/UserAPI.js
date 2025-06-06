import BaseAPI from "@base-api/baseAPI";

class UserAPI extends BaseAPI {
  constructor() {
    super();
  }

  async getUser(userId) {
    return await this.get(`api/users/${userId}`);
  }

  async postUser(payload) {
    return await this.post(`auth`, payload);
  }
}

export default UserAPI;