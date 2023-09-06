const connection = require('./connection');

const findAll = async () => {
	const [tasks] = await connection.execute('SELECT * FROM todo');
	return tasks;
};

module.exports = {
	findAll,
};
