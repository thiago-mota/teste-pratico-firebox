// import { useState } from 'react';
import axios from 'axios';

const Form = () => {
	const handleOnSubmit = async (event) => {
		event.preventDefault();

		const formData = {
			name: event.target.newTaskName.value,
			description: event.target.newTaskDescription.value,
			data: event.target.newTaskDate.value,
		};

		const { name, description, data } = formData;

		try {
			if (!name || !description || !data) {
				throw new Error(
					'Por gentileza, preencha todos os campos do formulário',
				);
			}
			await axios.post('http://localhost:3001', {
				name,
				description,
				data,
			});
		} catch (error) {
			alert(error.message);
			console.error('Erro ao enviar o formulário:', error.message);
		}
	};

	return (
		<div className='flex flex-col items-center justify-start w-screen'>
			<div>
				<form
					className='text-gray-400 bg-neutral-600 border-yellow-400 rounded-lg flex-col items-center justify-center'
					method='POST'
					action='http://localhost:3001/'
					onSubmit={handleOnSubmit}
				>
					<input
						type='text'
						id='newTaskDescription'
						name='newTaskDescription'
						placeholder='Adicione uma nova tarefa'
						className='text-gray-400 border-black bg-neutral-600 h-12 rounded-lg mb-2'
					/>
					<div className='flex flex-col items-center'>
						<input
							type='text'
							id='newTaskName'
							name='newTaskName'
							placeholder='Nomeie sua tarefa'
							className='text-gray-400 border-black bg-neutral-600 h-12 rounded-lg mb-2'
						/>
						<input
							type='datetime-local'
							id='newTaskDate'
							name='newTaskDate'
						/>
					</div>
					<button
						type='submit'
						id='newTask'
						name='newTask'
						className='text-gray-400 border-black bg-white h-12 rounded-lg mt-2'
					>
						Adicionar
					</button>
				</form>
			</div>
		</div>
	);
};

export default Form;
