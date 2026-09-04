const taskService = require("../services/taskService");

const getAllTasks = (req, res) => {
  const tasks = taskService.getAllTasks();

  res.status(200).json(tasks);
};

const getTaskById = (req, res) => {
  const task = taskService.getTaskById(req.params.id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found"
    });
  }

  res.status(200).json(task);
};

const createTask = (req, res) => {
  const { title, description, priority } = req.body;

if (!title) {
  return res.status(400).json({
    message: "Title is required"
  });
}

const validPriorities = ["LOW", "MEDIUM", "HIGH"];

if (priority && !validPriorities.includes(priority)) {
  return res.status(400).json({
    message: "Priority must be LOW, MEDIUM, or HIGH"
  });
}

const task = taskService.createTask({
  title,
  description,
  priority
});

  res.status(201).json(task);
};

const updateTaskStatus = (req, res) => {
  const { completed } = req.body;

  if (typeof completed !== "boolean") {
    return res.status(400).json({
      message: "Completed must be a boolean value"
    });
  }

  const task = taskService.updateTaskStatus(
    req.params.id,
    completed
  );

  if (!task) {
    return res.status(404).json({
      message: "Task not found"
    });
  }

  res.status(200).json(task);
};

const deleteTask = (req, res) => {
  const deleted = taskService.deleteTask(req.params.id);

  if (!deleted) {
    return res.status(404).json({
      message: "Task not found"
    });
  }

  res.status(204).send();
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTaskStatus,
  deleteTask
};