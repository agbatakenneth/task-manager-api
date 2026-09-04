const request = require("supertest");
const app = require("../src/app");
const taskService = require("../src/services/taskService");

beforeEach(() => {
  taskService.resetTasks();
});

describe("Task Manager API", () => {

  test("Health check should return UP", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("UP");
  });

  test("Should create a task", async () => {
    const response = await request(app)
      .post("/api/tasks")
      .send({
        title: "Learn Git branching",
        description: "Practice feature and develop branches"
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe("Learn Git branching");
    expect(response.body.completed).toBe(false);
  });

  test("Should return all tasks", async () => {
    await request(app)
      .post("/api/tasks")
      .send({
        title: "Learn Docker"
      });

    const response = await request(app)
      .get("/api/tasks");

    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(1);
  });

  test("Should return 400 when title is missing", async () => {
    const response = await request(app)
      .post("/api/tasks")
      .send({
        description: "Task without title"
      });

    expect(response.statusCode).toBe(400);
  });

});