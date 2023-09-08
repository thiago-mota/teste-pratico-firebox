/* eslint-disable mocha/no-mocha-arrows */
const axios = require('axios');
const AxiosMockAdapter = require('axios-mock-adapter');
const {
	expectedTasks,
	expectedSingleTask,
} = require('../helpers/mocks/tasks.mocks');
const { getAllTasks, getSingleTask } = require('../helpers/axios/axios.fetchs');

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
		expect(tasks[0]).toHaveProperty('id');
		expect(tasks[0]).toHaveProperty('name');
		expect(tasks[0]).toHaveProperty('description');
		expect(tasks[0]).toHaveProperty('data');
	});

	it('GET/:id -> should return status 200 and have correct tasks properties', async () => {
		mock.onGet('http://localhost:3001/1').reply(200, expectedSingleTask);
		const response = await getSingleTask();
		console.log(response);

		const { status, data } = response;
		const { tasks } = data;

		expect(status).toBe(200);
		expect(tasks[0]).toHaveProperty('id');
		expect(tasks[0]).toHaveProperty('name');
		expect(tasks[0]).toHaveProperty('description');
		expect(tasks[0]).toHaveProperty('data');
	});
});
