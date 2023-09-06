const { StatusCodes } = require('http-status-codes');
const { taskService } = require('../services');

const findAllTasks = async (_request, response) => {
	const allTasks = await taskService.findAllTasks();
	return response.status(StatusCodes.OK).json({ message: allTasks });
};

const createTask = async (request, response) => {
	const { name, description, data } = request.body;
	const lastInsertedTask = await taskService.createTask(
		name,
		description,
		data,
	);
	return response
		.status(StatusCodes.CREATED)
		.json({ message: lastInsertedTask });
};

const getTaskById = async (request, response) => {
	const { id } = request.params;
	const task = await taskService.getTaskById(id);
	return response.status(StatusCodes.OK).json({ message: task });
};

const deleteTaskById = async (request, response) => {
	const { id } = request.params;
	await taskService.deleteTaskById(id);
	return response.status(StatusCodes.NO_CONTENT).json();
};

module.exports = {
	findAllTasks,
	createTask,
	getTaskById,
	deleteTaskById,
};
