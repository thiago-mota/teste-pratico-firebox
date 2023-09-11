import axios from 'axios';

const Form = ({ tasks, setTasks }) => {
	const handleOnSubmit = async (event) => {
		event.preventDefault();

		const formData = {
			name: event.target.newTaskName.value,
			description: event.target.newTaskDescription.value,
			data: event.target.newTaskDate.value,
			status: false,
		};

		const { name, description, data, status } = formData;

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
				status,
			});

			const newTaskAdded = [...tasks, formData];
			setTasks(newTaskAdded);

			console.log(tasks);
			console.log(formData);
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
					<label htmlFor='newTaskName'>
						Nome:
						<input
							type='text'
							id='newTaskName'
							name='newTaskName'
							placeholder='Levar os meninos à praia'
							className='text-gray-400 border-black bg-neutral-600 h-12 rounded-lg mb-2'
						/>
					</label>

					<div className='flex flex-col items-center'>
						<label htmlFor='newTaskDescription'>
							Descrição:
							<input
								type='text'
								id='newTaskDescription'
								name='newTaskDescription'
								placeholder='Lembrar de levar protetor...'
								className='text-gray-400 border-black bg-neutral-600 h-12 rounded-lg mb-2'
							/>
						</label>
						<label htmlFor='newTaskDate'>
							Data:
							<input
								type='datetime-local'
								id='newTaskDate'
								name='newTaskDate'
							/>
						</label>
					</div>
					<button
						type='submit'
						id='newTask'
						name='newTask'
						className='text-gray-400 border-black bg-white h-12 rounded-lg mt-2'
					>
						Adicionar nova tarefa
					</button>
				</form>
			</div>
		</div>
	);
};

export default Form;
