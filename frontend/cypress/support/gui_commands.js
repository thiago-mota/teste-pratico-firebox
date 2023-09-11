/* eslint-disable no-undef */
Cypress.Commands.add('gui_createTask', (task) => {
	cy.visit('http://localhost/');

	cy.get('#newTaskName').type(task.name);
	cy.get('#newTaskDescription').type(task.description);
	cy.get('#newTaskDate').type(task.data);
	cy.get('#newTask').click();
});

Cypress.Commands.add('gui_deleteSingleTask', () => {
	cy.visit('http://localhost/');
	cy.get('#deleteTask').click();
});
