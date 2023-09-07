const express = require('express');
const { taskController } = require('../controllers');
const { validateFields } = require('../helpers/Middlewares/tasks.middlewares');

const tasksRouter = express.Router();

tasksRouter.get('/', taskController.findAllTasks);
tasksRouter.get('/:id', taskController.getTaskById);
tasksRouter.post('/', validateFields, taskController.createTask);
tasksRouter.delete('/:id', taskController.deleteTaskById);
tasksRouter.put('/:id', validateFields, taskController.updateTaskById);

module.exports = tasksRouter;
