const axios = require('axios');
const { updatedTask } = require('../mocks/tasks.mocks');

const getAllTasks = async () => {
	const response = await axios.get('http://localhost:3001/');
	return response;
};

const getSingleTask = async () => {
	const response = await axios.get('http://localhost:3001/1');
	return response;
};

const createTask = async () => {
	const response = await axios.post('http://localhost:3001/');
	return response;
};

const updateTask = async () => {
	const response = await axios.put('http://localhost:3001/2', updatedTask);
	return response;
};

module.exports = {
	getAllTasks,
	getSingleTask,
	createTask,
	updateTask,
};
