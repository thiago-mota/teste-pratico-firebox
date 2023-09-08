const axios = require('axios');

const getAllTasks = async () => {
	const response = await axios.get('http://localhost:3001/');
	return response;
};

const getSingleTask = async () => {
	const response = await axios.get('http://localhost:3001/1');
	return response;
};

module.exports = {
	getAllTasks,
	getSingleTask,
};
