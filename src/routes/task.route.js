const express = require('express');
const { taskController } = require('../controllers');

const tasksRouter = express.Router();

tasksRouter.get('/', taskController.findAllTasks);
tasksRouter.get('/:id', taskController.getTaskById);
tasksRouter.delete('/:id', taskController.deleteTaskById);
tasksRouter.post('/', taskController.createTask);

module.exports = tasksRouter;
