const taskServices = require('../services/taskServices');

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await taskServices.getAlltasks();
    res.status(200).json(allTasks);

  }
  catch (err) {
    res.status(500).json(err);
  }
};


const addTask = async (req, res) => {
  try {
    const task = await taskServices.addTask(req.body);
    res.status(200).json(task);
  }
  catch (err) {
    res.status(500).json(err);
  }
};

const updateTask = async (req, res) => {
  try {
    const taskId = Number(req.params.id);
    const task = await taskServices.completeTask(taskId);
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteTask = async (req, res) => {
  try {
    const taskId = Number(req.params.id);
    const task = await taskServices.deteteTask(taskId);
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllTasks,
  addTask,
  updateTask,
  deleteTask
};

