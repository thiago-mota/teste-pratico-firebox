const connection = require('./connection');

const findAll = async () => {
	const [tasks] = await connection.execute('SELECT * FROM todo');
	return tasks;
};

const createTask = async (name, description, data) => {
	const [createNewTask] = await connection.execute(
		'INSERT INTO todo (name, description, data) VALUES (?, ?, ?)',
		[name, description, data],
	);
	return createNewTask;
};

const getLastInsertedTask = async () => {
	const [[lastInsertedTask]] = await connection.execute(
		'SELECT * FROM todo where Id=(SELECT LAST_INSERT_ID());',
	);
	return lastInsertedTask;
};

module.exports = {
	findAll,
	createTask,
	getLastInsertedTask,
};
