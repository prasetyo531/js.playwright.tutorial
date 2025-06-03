import { test, expect } from "@playwright/test";
import UserAPI from "@base-url-api/UserAPI";
import Ajv from "ajv";
import VALID_GET_USERS_SCHEMA from "@base-schemas-api/user-api.schema"

const ajv = new Ajv();

test.describe("Add Single User", () => {
  test.only("Validate valid Todo API response structure", async () => {
    const userAPI = new UserAPI();
    const newUser = {
      username: "admin",
      password: "password123",
    };

    const response = await userAPI.postUser(newUser);

    // Check schema
    const validate = ajv.compile(VALID_GET_USERS_SCHEMA);
    const valid = validate(response);

    if (!valid) {
      console.error('Schema validation errors:', validate.errors);
    }

    expect(valid).toBe(true);
    expect(response).toHaveProperty('token');
    expect(typeof response.token).toBe('string');
  });
});
