/* eslint-disable mocha/no-mocha-arrows */
const axios = require('axios');
const AxiosMockAdapter = require('axios-mock-adapter');
const { expectedTasks } = require('../helpers/mocks/tasks.mocks');
const { getData } = require('../helpers/axios/axios.fetchs');

const mock = new AxiosMockAdapter(axios);

describe('Task Controller', () => {
	afterEach(() => {
		mock.reset();
	});

	it('findAll -> Status 200', async () => {
		mock.onGet('http://localhost:3001/').reply(200, expectedTasks);
		const response = await getData();
		const { status, data } = response;
		const { tasks } = data;

		expect(status).toBe(200);
		expect(tasks).toHaveLength(3);
		expect(tasks[0]).toHaveProperty('id');
		expect(tasks[0]).toHaveProperty('name');
		expect(tasks[0]).toHaveProperty('description');
		expect(tasks[0]).toHaveProperty('data');
	});
});
