const { StatusCodes } = require('http-status-codes');

const validateFields = async (request, response, next) => {
	const { name, description, data } = request.body;
	if (!name || !description || !data) {
		return response
			.status(StatusCodes.BAD_REQUEST)
			.json({ message: 'Some required fields are missing' });
	}
	next();
};

module.exports = {
	validateFields,
};
