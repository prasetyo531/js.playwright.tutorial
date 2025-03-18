import BaseAPI from "@base-api/baseAPI";

class UserAPI extends BaseAPI {
  constructor() {
    super();
  }

  async getUser(userId) {
    return await this.get(`/users/${userId}`);
  }
}

export default UserAPI;