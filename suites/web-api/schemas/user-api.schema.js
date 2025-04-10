const VALID_GET_USERS_SCHEMA = {
  type: "object",
  required: [
      "id",
      "createdAt"
  ],
  additionalProperties: true,
  properties: {
      id: {
          type: "string"
      },
      createdAt: {
          type: "string"
      }
  }
}

export default VALID_GET_USERS_SCHEMA;