/* eslint-disable no-tabs */
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
	host: process.env.MYSQL_HOST,
	port: process.env.MYSQL_PORT,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database: 'todolistdb',
});

module.exports = connection;
