import { expect, test } from "@playwright/test";
import UserAPI from "@base-url-api/UserAPI";
import { userValid } from "@data/const/user-id.data";

test.describe("Get Single User", () => {
  let userAPI, userId;

  test("Get user by ID", async () => {
    userAPI = new UserAPI();
    userId = userValid.user_id;
    //valid user ID
    const response = await userAPI.getUser(userId);
    console.log(response);
  });
});