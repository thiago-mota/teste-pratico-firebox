const { taskModel } = require('../models');

const findAllTasks = async () => {
	const tasks = await taskModel.findAll();
	return tasks;
};

const createTask = async (name, description, data) => {
	const newTask = await taskModel.createTask(name, description, data);
	return newTask;
};

module.exports = {
	findAllTasks,
	createTask,
};
