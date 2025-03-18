import { expect, test } from "@playwright/test";
import UserAPI from "@base-url-api/UserAPI";
import { userValid } from "@data/const/user-id.data";

test.describe("Get Single User", () => {
  let userAPI, userId;

  test.beforeAll(async () => {
    userAPI = new UserAPI();
    await userAPI.init(); // Ensure init is called before any requests

    userId = userValid.user_id;
  });

  test("Get user by ID", async () => {
    //valid user ID
    const response = await userAPI.getUser(userId);
    console.log(response);
  });
});