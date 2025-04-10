import { test, expect } from "@playwright/test";
import UserAPI from "@base-url-api/UserAPI";
import Ajv from "ajv";
import VALID_GET_USERS_SCHEMA from "@base-schemas-api/user-api.schema"

const ajv = new Ajv();
const validateUser  = ajv.compile(VALID_GET_USERS_SCHEMA);

test.describe("Add Single User", () => {
  test("Validate valid Todo API response structure", async () => {
    const userAPI = new UserAPI();

    const newUser = {
      name: "Prasetyo",
      job: "Leader",
    };

    const response = await userAPI.postUser(newUser);

    console.log('API Response:', JSON.stringify(response, null, 2)); // Pretty print the response

    const ajv = new Ajv();
    const valid = validateUser(response);

    // Output the errors text
    if (!valid) {
        console.error('Validation errors:', validateUser.errors);
    }

    // If the JSON is valid, the variable is "true"
    expect(valid).toBe(true);
  });
});
