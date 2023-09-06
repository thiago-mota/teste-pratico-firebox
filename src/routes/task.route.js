const express = require('express');
const { taskController } = require('../controllers');

const tasksRouter = express.Router();

tasksRouter.get('/', taskController.findAllTasks);

module.exports = tasksRouter;
