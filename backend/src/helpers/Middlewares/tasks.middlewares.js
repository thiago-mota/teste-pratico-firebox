const { StatusCodes } = require('http-status-codes');
const { taskService } = require('../../services');

const validateFields = async (request, response, next) => {
	const { name, description, data } = request.body;
	if (!name || !description || !data) {
		return response
			.status(StatusCodes.BAD_REQUEST)
			.json({ message: 'Some required fields are missing' });
	}
	next();
};

const validateTask = async (request, response, next) => {
	const { id } = request.params;
	const findTask = await taskService.getTaskById(id);
	if (!findTask.length) {
		return response
			.status(StatusCodes.BAD_REQUEST)
			.json({ message: 'Task does not exist' });
	}
	next();
};

module.exports = {
	validateFields,
	validateTask,
};
