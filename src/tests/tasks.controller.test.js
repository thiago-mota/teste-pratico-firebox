/* eslint-disable mocha/no-mocha-arrows */
const axios = require('axios');
const AxiosMockAdapter = require('axios-mock-adapter');
const {
	expectedTasks,
	expectedSingleTask,
	newTask,
} = require('../helpers/mocks/tasks.mocks');
const {
	getAllTasks,
	getSingleTask,
	createTask,
} = require('../helpers/axios/axios.fetchs');

const mock = new AxiosMockAdapter(axios);

describe('Task Controller', () => {
	afterEach(() => {
		mock.reset();
	});

	it('GET/ -> should return status 200 and should have correct tasks properties', async () => {
		mock.onGet('http://localhost:3001/').reply(200, expectedTasks);
		const response = await getAllTasks();
		const { status, data } = response;
		const { tasks } = data;

		expect(status).toBe(200);
		expect(tasks).toHaveLength(3);
		expect(tasks[2]).toMatchObject({
			id: 3,
			name: 'Pvzinho b-day',
			description: 'yeee lets party hard baby',
			data: '2023-09-06T04:04:04.000Z',
		});
	});

	it('GET/:id -> should return status 200 and have correct tasks properties', async () => {
		mock.onGet('http://localhost:3001/1').reply(200, expectedSingleTask);
		const response = await getSingleTask();

		const { status, data } = response;
		const { tasks } = data;

		expect(status).toBe(200);
		expect(tasks[0]).toMatchObject({
			id: 1,
			name: 'Business Meeting',
			description: 'Business meeting with XPTO employees',
			data: '2023-09-06T01:01:01.000Z',
		});
	});

	it('POST/ -> should return status 201 and create a new task', async () => {
		mock.onPost('http://localhost:3001/').reply(201, newTask);
		const response = await createTask();

		const { status, data } = response;
		const { tasks } = data;

		expect(status).toBe(201);
		expect(tasks[0]).toMatchObject({
			id: 4,
			name: 'Zoo day with the Kids',
			description: 'Remember to bring water and sun protector',
			data: '2023-09-15T08:30:35.000Z',
		});
	});
});
