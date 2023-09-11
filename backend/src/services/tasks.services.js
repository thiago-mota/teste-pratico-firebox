const { taskModel } = require('../models');

const findAllTasks = async () => {
	const tasks = await taskModel.findAll();
	return tasks;
};

const lastInsertedTask = async () => {
	const lastInserted = await taskModel.getLastInsertedTask();
	return lastInserted;
};

const createTask = async (name, description, data, status) => {
	await taskModel.createTask(name, description, data, status);
	const newTask = await lastInsertedTask();
	return newTask;
};

const getTaskById = async (id) => {
	const task = await taskModel.getTaskById(id);
	return task;
};

const deleteTaskById = async (id) => {
	const deletedTask = await taskModel.deleteTaskById(id);
	return deletedTask;
};

const updateTaskById = async (id, name, description, data, status) => {
	await taskModel.updateTaskById(id, name, description, data, status);
	const updatedTask = await taskModel.getTaskById(id);
	return updatedTask;
};

module.exports = {
	findAllTasks,
	createTask,
	getTaskById,
	deleteTaskById,
	updateTaskById,
	lastInsertedTask,
};
