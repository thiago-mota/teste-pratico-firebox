const { StatusCodes } = require('http-status-codes');
const { taskService } = require('../services');

const findAllTasks = async (_request, response) => {
	const allTasks = await taskService.findAllTasks();
	return response.status(StatusCodes.OK).json(allTasks);
};

module.exports = {
	findAllTasks,
};
