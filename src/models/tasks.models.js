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
		'SELECT * FROM todo WHERE Id=(SELECT LAST_INSERT_ID());',
	);
	return lastInsertedTask;
};

const getTaskById = async (id) => {
	const [task] = await connection.execute('SELECT * FROM todo WHERE Id = ?', [
		id,
	]);
	return task;
};

const deleteTaskById = async (id) => {
	const deletedTask = await connection.execute('DELETE FROM todo WHERE Id= ?', [
		id,
	]);
	return deletedTask;
};

const updateTaskById = async (id, name, description, data) => {
	const [updatedTask] = await connection.execute(
		'UPDATE todo SET name = ?, description = ?, data = ? WHERE Id = ?',
		[name, description, data, id],
	);
	return updatedTask;
};

module.exports = {
	findAll,
	createTask,
	getLastInsertedTask,
	getTaskById,
	deleteTaskById,
	updateTaskById,
};
