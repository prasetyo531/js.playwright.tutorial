import { test } from "@playwright/test";
import UserAPI from "@base-url-api/UserAPI";

test.describe("Add Single User", () => {
  let userAPI;

  test("Add user by", async () => {
    userAPI = new UserAPI();

    const payload = {
        name: "prasetyo",
        job: "leader"
      }

    const response = await userAPI.postUser(payload);
    console.log(response);
  });
});