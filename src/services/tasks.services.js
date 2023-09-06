const { taskModel } = require('../models');

const findAllTasks = async () => {
	const tasks = await taskModel.findAll();
	return tasks;
};

const createTask = async (name, description, data) => {
	await taskModel.createTask(name, description, data);
	const lastInsertedTask = await taskModel.getLastInsertedTask();
	return lastInsertedTask;
};

module.exports = {
	findAllTasks,
	createTask,
};
