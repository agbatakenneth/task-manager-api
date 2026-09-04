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

test("Should create a HIGH priority task", async () => {
  const response = await request(app)
    .post("/api/tasks")
    .send({
      title: "Learn AWS",
      description: "Prepare for AWS certification",
      priority: "HIGH"
    });

  expect(response.statusCode).toBe(201);
  expect(response.body.priority).toBe("HIGH");
  expect(response.body.completed).toBe(false);
});

test("Should default priority to MEDIUM when priority is not provided", async () => {
  const response = await request(app)
    .post("/api/tasks")
    .send({
      title: "Learn Docker",
      description: "Practice Docker commands"
    });

  expect(response.statusCode).toBe(201);
  expect(response.body.priority).toBe("MEDIUM");
});

test("Should reject an invalid priority", async () => {
  const response = await request(app)
    .post("/api/tasks")
    .send({
      title: "Learn Kubernetes",
      description: "Practice Kubernetes",
      priority: "URGENT"
    });

  expect(response.statusCode).toBe(400);
  expect(response.body.message)
    .toBe("Priority must be LOW, MEDIUM, or HIGH");
});
