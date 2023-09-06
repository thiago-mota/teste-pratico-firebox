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

const getTaskById = async (id) => {
	const task = await taskModel.getTaskById(id);
	return task;
};

const deleteTaskById = async (id) => {
	const deletedTask = await taskModel.deleteTaskById(id);
	return deletedTask;
};

module.exports = {
	findAllTasks,
	createTask,
	getTaskById,
	deleteTaskById,
};
