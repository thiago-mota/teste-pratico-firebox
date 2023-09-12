/* eslint-disable mocha/no-mocha-arrows */
const {
	expectedTasks,
	expectedSingleTask,
	newTask,
	taskToUpdate,
	updatedTask,
} = require('../helpers/mocks/tasks.mocks');

const { taskService } = require('../services');
const { taskModel } = require('../models');

describe('Task Service', () => {
	const findAllMock = jest.fn();
	const getTaskByIdMock = jest.fn();
	const createTaskMock = jest.fn();
	const getLastInsertedMock = jest.fn();
	const deleteTaskByIdMock = jest.fn();
	const updateTaskByIdMock = jest.fn();

	beforeEach(() => {
		taskModel.findAll = findAllMock;
		taskModel.getTaskById = getTaskByIdMock;
		taskModel.createTask = createTaskMock;
		taskModel.getLastInsertedTask = getLastInsertedMock;
		taskModel.deleteTaskById = deleteTaskByIdMock;
		taskModel.updateTaskById = updateTaskByIdMock;
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

	it('should create a new Task', async () => {
		const { tasks } = newTask;
		const [{ name, description, data, status }] = tasks;
		getLastInsertedMock.mockResolvedValue(newTask);

		const createdTask = await taskService.createTask(
			name,
			description,
			data,
			status,
		);

		expect(createTaskMock).toHaveBeenCalledWith(
			name,
			description,
			data,
			status,
		);
		expect(createdTask).toEqual(newTask);
	});

	it('should delete a task', async () => {
		const taskIdToDelete = 1;
		deleteTaskByIdMock.mockResolvedValue(undefined);
		const result = await taskService.deleteTaskById(taskIdToDelete);

		expect(deleteTaskByIdMock).toHaveBeenCalledWith(taskIdToDelete);
		expect(result).toBeUndefined();
	});

	it('should update a task', async () => {
		getTaskByIdMock.mockResolvedValue(updatedTask);

		const result = await taskService.updateTaskById(updatedTask);

		expect(getTaskByIdMock).toHaveBeenCalledWith(updatedTask);
		expect(result).toEqual(updatedTask);
	});
});
