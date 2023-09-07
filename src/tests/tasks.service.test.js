/* eslint-disable mocha/no-mocha-arrows */
const {
	expectedTasks,
	expectedSingleTask,
} = require('../helpers/mocks/tasks.mocks');
const { taskService } = require('../services');
const { taskModel } = require('../models');

describe('Task Service', () => {
	const findAllMock = jest.fn();
	const getTaskByIdMock = jest.fn();

	beforeEach(() => {
		taskModel.findAll = findAllMock;
		taskModel.getTaskById = getTaskByIdMock;
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should return all tasks', async () => {
		findAllMock.mockResolvedValue(expectedTasks);
		const tasks = await taskService.findAllTasks();
		expect(tasks).toEqual(expectedTasks);
		expect(expectedTasks.tasks).toHaveLength(3);
	});

	it('should return a single task', async () => {
		getTaskByIdMock.mockResolvedValue(expectedSingleTask);
		const taskId = 1;
		const task = await taskService.getTaskById(taskId);
		expect(task).toEqual(expectedSingleTask);
		expect(getTaskByIdMock).toHaveBeenCalledWith(taskId);
	});
});
