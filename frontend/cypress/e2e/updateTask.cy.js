/* eslint-disable no-undef */
describe('Testing frontend', () => {
	it('updates an existing task', () => {
		const task = {
			name: 'Convidar PV para jantar',
			description: 'comer até ser expulso do restaurante',
			data: '2023-09-13T19:00',
			status: 0,
			convertedDate: 'qua, 13 de set de 2023 às 19:00',
		};

		const updatedTask = {
			name: 'Ir sozinho ao restaurante',
			description: 'tomar uma água e ir embora',
			data: '2023-10-13T19:00',
			status: 1,
		};
		cy.visit('http://localhost/');
		cy.api_createTask(task).then((response) => {
			const { id } = response.body.message;
			cy.api_updateTask(id, updatedTask);
		});
	});
});
