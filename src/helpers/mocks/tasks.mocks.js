const expectedTasks = {
	tasks: [
		{
			id: 49,
			name: 'Business Meeting',
			description: 'Business meeting with XPTO employees',
			data: '2023-09-06T01:01:01.000Z',
		},
		{
			id: 50,
			name: 'Medical appointment',
			description: 'Tomorrow morning, Dr. Dohn Doe',
			data: '2023-09-06T02:02:02.000Z',
		},
		{
			id: 51,
			name: 'Pvzinho b-day',
			description: 'yeee lets party hard baby',
			data: '2023-09-06T04:04:04.000Z',
		},
	],
};

const expectedSingleTask = {
	tasks: [
		{
			id: 1,
			name: 'to-do task 1',
			description: 'this is the first task',
			data: '2023-09-05T18:41:35.000Z',
		},
	],
};

module.exports = {
	expectedTasks,
	expectedSingleTask,
};
