const expectedTasks = {
	tasks: [
		{
			id: 1,
			name: 'Business Meeting',
			description: 'Business meeting with XPTO employees',
			data: '2023-09-06T01:01:01.000Z',
		},
		{
			id: 2,
			name: 'Medical appointment',
			description: 'Tomorrow morning, Dr. Dohn Doe',
			data: '2023-09-06T02:02:02.000Z',
		},
		{
			id: 3,
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
			name: 'Business Meeting',
			description: 'Business meeting with XPTO employees',
			data: '2023-09-06T01:01:01.000Z',
		},
	],
};

const newTask = {
	tasks: [
		{
			id: 4,
			name: 'Zoo day with the Kids',
			description: 'Remember to bring water and sun protector',
			data: '2023-09-15T08:30:35.000Z',
			status: 1,
		},
	],
};

const taskToUpdate = {
	task: [
		{
			id: 2,
			name: 'Medical appointment',
			description: 'Tomorrow morning, Dr. Dohn Doe',
			data: '2023-09-06T02:02:02.000Z',
		},
	],
};

const updatedTask = {
	task: [
		{
			name: 'This is an updated task',
			description: 'this task was sucessfully updated',
			data: '2023-09-06 07:07:07',
		},
	],
};

module.exports = {
	expectedTasks,
	expectedSingleTask,
	newTask,
	taskToUpdate,
	updatedTask,
};
