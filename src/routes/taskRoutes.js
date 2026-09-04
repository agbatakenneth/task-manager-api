const express = require("express");

const {
  getAllTasks,
  getTaskById,
  createTask,
  updateTaskStatus,
  deleteTask
} = require("../controllers/taskController");

const router = express.Router();

router.get("/", getAllTasks);

router.get("/:id", getTaskById);

router.post("/", createTask);

router.patch("/:id/status", updateTaskStatus);

router.delete("/:id", deleteTask);

module.exports = router;