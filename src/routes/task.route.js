const express = require('express');
const { taskController } = require('../controllers');

const tasksRouter = express.Router();

tasksRouter.get('/', taskController.findAllTasks);
tasksRouter.get('/:id', taskController.getTaskById);
tasksRouter.post('/', taskController.createTask);
tasksRouter.delete('/:id', taskController.deleteTaskById);
tasksRouter.put('/:id', taskController.updateTaskById);

module.exports = tasksRouter;
