const request = require("supertest");
const app = require("../src/app");

describe("API Students", () => {
  it("GET /students debe retornar 200", async () => {
    const res = await request(app).get("/students");
    expect(res.statusCode).toBe(200);
  });

  it("POST /students debe crear estudiante", async () => {
    const res = await request(app)
      .post("/students")
      .send({ name: "Miguel", email: "miguel@test.com" });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe("Miguel");
  });
});