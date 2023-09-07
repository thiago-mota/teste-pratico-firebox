const { expectedTasks } = require('../helpers/mocks/tasks.mocks');
const { taskService } = require('../services');
const { taskModel } = require('../models');

describe('Task Service', () => {
	const findAllMock = jest.fn();
	beforeEach(() => {
		taskModel.findAll = findAllMock;
	});

	afterEach(() => {
		jest.clearAllMocks();
	});
	it('should return all tasks', async () => {
		findAllMock.mockResolvedValue(expectedTasks);
		const tasks = await taskService.findAllTasks();

		expect(tasks).toEqual(expectedTasks);
	});
});
