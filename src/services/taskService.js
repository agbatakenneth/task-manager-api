let tasks = [];
let nextId = 1;

const getAllTasks = () => {
  return tasks;
};

const getTaskById = (id) => {
  return tasks.find((task) => task.id === Number(id));
};

const createTask = ({ title, description, priority }) => {
  const task = {
    id: nextId++,
    title,
    description: description || "",
    priority: priority || "MEDIUM",
    completed: false
  };

  tasks.push(task);
  return task;
};
const updateTaskStatus = (id, completed) => {
  const task = getTaskById(id);

  if (!task) {
    return null;
  }

  task.completed = completed;

  return task;
};

const deleteTask = (id) => {
  const taskIndex = tasks.findIndex(
    (task) => task.id === Number(id)
  );

  if (taskIndex === -1) {
    return false;
  }

  tasks.splice(taskIndex, 1);

  return true;
};

const resetTasks = () => {
  tasks = [];
  nextId = 1;
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTaskStatus,
  deleteTask,
  resetTasks
};