const axios = require('axios');

const getData = async () => {
	const response = await axios.get('http://localhost:3001/');
	return response;
};

module.exports = {
	getData,
};
