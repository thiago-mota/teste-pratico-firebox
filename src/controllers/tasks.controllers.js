const { StatusCodes } = require('http-status-codes');
const { taskService } = require('../services');

const findAllTasks = async (_request, response) => {
	const allTasks = await taskService.findAllTasks();
	return response.status(StatusCodes.OK).json(allTasks);
};

const createTask = async (request, response) => {
	const { name, description, data } = request.body;
	const newTask = await taskService.createTask(name, description, data);
	return response.status(StatusCodes.CREATED).json({ message: newTask });
};

module.exports = {
	findAllTasks,
	createTask,
};
