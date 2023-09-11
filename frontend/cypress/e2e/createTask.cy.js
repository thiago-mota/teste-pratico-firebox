/* eslint-disable no-undef */
describe('Testing frontend', () => {
	const task = {
		name: 'Passear no parque',
		description: 'levar o cachorrinho',
		data: '2023-09-13T19:00',
		status: 0,
		convertedDate: 'qua, 13 de set de 2023 às 19:00',
	};

	it('creates a new task', () => {
		cy.gui_createTask(task);

		cy.url().should('be.equal', `${Cypress.config('baseUrl')}`);
		cy.contains(task.name).should('be.visible');
		cy.contains(task.description).should('be.visible');
		cy.contains(task.convertedDate).should('be.visible');
		cy.contains('Suas tarefas').should('be.visible');
	});

	it('creates a new task', () => {
		cy.api_createTask(task);
	});
});
