/* eslint-disable no-undef */
describe('Testing frontend', () => {
	const task = {
		name: 'Ir ao zoológico',
		description: 'Visitar joão',
		data: '2022-09-13T19:00',
		status: 0,
		convertedDate: 'ter, 13 de set de 2022 às 19:00',
	};

	const staticTask = {
		name: 'xablau',
		description: 'xablau',
		data: '2022-09-13T19:00',
		status: 0,
		convertedDate: 'ter, 13 de set de 2022 às 19:00',
	};

	it('deletes and existing task', () => {
		cy.api_deleteAllTasks();
		cy.api_createTask(task);
		cy.gui_deleteSingleTask();

		cy.contains(task.name).should('not.equal', staticTask.name);
		cy.contains(task.description).should('not.equal', staticTask.description);
	});
});
