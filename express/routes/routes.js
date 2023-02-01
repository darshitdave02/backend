const app = require('express');
const {getAllTasks, addTask, updateTask, deleteTask } = require('../controllers/taskControllers');
const Router = app.Router;

const router = Router();


router.get('/',getAllTasks);

router.post('/',addTask);

router.patch('/:id',updateTask);

router.delete('/:id',deleteTask);

module.exports = { taskRouter: router };


