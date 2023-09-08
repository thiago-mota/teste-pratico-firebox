/* eslint-disable mocha/no-mocha-arrows */
const {
	expectedTasks,
	expectedSingleTask,
	newTask,
	createTaskData,
} = require('../helpers/mocks/tasks.mocks');

const { taskService } = require('../services');
const { taskModel } = require('../models');

describe('Task Service', () => {
	const findAllMock = jest.fn();
	const getTaskByIdMock = jest.fn();
	const createTaskMock = jest.fn();
	/* o payload do createTask traz informações da interação com o banco e não os dados da nova atividade inserida no DB.
	O mock getLastInsertedMock está mockando a função que está dentro de createTask e que busca no DB os dados da atividade adicionada
	*/
	const getLastInsertedMock = jest.fn(async (_name, _description, _data) => {
		const lastInsertedTask = await taskModel.getLastInsertedTask();
		return lastInsertedTask;
	});

	beforeEach(() => {
		taskModel.findAll = findAllMock;
		taskModel.getTaskById = getTaskByIdMock;
		taskModel.createTask = createTaskMock;
		taskModel.getLastInsertedTask = getLastInsertedMock;
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
		const { name, description, data } = createTaskData;
		getLastInsertedMock.mockResolvedValue(newTask);
		const createdTask = await taskService.createTask(name, description, data);

		expect(createTaskMock).toHaveBeenCalledWith(name, description, data);
		expect(createdTask).toEqual(newTask);
	});
});
