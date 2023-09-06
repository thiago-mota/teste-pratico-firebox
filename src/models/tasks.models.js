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

	const [[newTask]] = await connection.execute(
		'SELECT * FROM todo WHERE id = ?',
		[createNewTask.insertId],
	);

	return newTask;
};

module.exports = {
	findAll,
	createTask,
};
