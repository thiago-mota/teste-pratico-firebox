/* eslint-disable no-undef */
Cypress.Commands.add('api_getAllTasks', () => {
	cy.request({
		method: 'GET',
		url: 'http://localhost:3001/',
	});
});

Cypress.Commands.add('api_deleteAllTasks', () => {
	cy.api_getAllTasks().then((response) => {
		response.body.tasks.forEach((task) =>
			cy.request({
				method: 'DELETE',
				url: `http://localhost:3001/${task.id}`,
			}),
		);
	});
});

Cypress.Commands.add('api_createTask', (task) => {
	return cy.request('POST', 'http://localhost:3001/', {
		name: task.name,
		description: task.description,
		data: task.data,
		status: task.status,
	});
});

Cypress.Commands.add('api_updateTask', (id, updatedTask) => {
	cy.log('LOG DO updatedTask', updatedTask);
	cy.request({
		method: 'PUT',
		url: `http://localhost:3001/${id}`,
		body: {
			id,
			name: updatedTask.name,
			description: updatedTask.description,
			data: updatedTask.data,
			status: updatedTask.status,
		},
	});
});

Cypress.Commands.add('api_deleteSingleTask', (id) => {
	cy.request({
		method: 'DELETE',
		url: `http://localhost:3001/${id}`,
	});
});
