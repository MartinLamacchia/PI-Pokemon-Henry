const app = require("../src/app");
const session = require("supertest");
const axios = require("axios");
const agent = session(app);

describe("GET /type", () => {
  it("Responde con status: 200", async () => {
    await agent.get("/type").expect(200);
  });
});
