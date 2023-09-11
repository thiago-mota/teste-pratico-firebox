import axios from 'axios';

const Form = ({ tasks, setTasks, fetchData }) => {
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

			setTasks(await fetchData());
		} catch (error) {
			alert(error.message);
			console.error('Erro ao enviar o formulário:', error.message);
		}
	};

	return (
		<div className='flex flex-col items-center'>
			<div>
				<form
					className='text-gray-400 bg-neutral-600  w-fit flex flex-col justify-center content-start mb-2 p-4'
					method='POST'
					action='http://localhost:3001/'
					onSubmit={handleOnSubmit}
				>
					<div className='flex flex-col items-center mr-5 ml-5 p-2'>
						<h1 className='text-white text-xl mb-5'>Nova tarefa</h1>
						<input
							type='text'
							id='newTaskName'
							name='newTaskName'
							placeholder='Nomeie sua tarefa'
							className='shadow appearance-none border rounded-md w-60 py-2 px-3 mr-4 text-grey-darker'
						/>
						<input
							type='text'
							id='newTaskDescription'
							name='newTaskDescription'
							placeholder='Descreva sua tarefa'
							className='shadow appearance-none border rounded-md w-60 py-2 px-3 mr-4 text-grey-darker mt-2'
						/>
						<input
							className='shadow appearance-none border rounded-md w-60 py-2 px-3 h-9 mr-4 text-grey-darker mt-2'
							type='datetime-local'
							id='newTaskDate'
							name='newTaskDate'
							min='1930-06-01T00:00'
							max='2099-06-01T00:00'
						/>
						<button
							type='submit'
							id='newTask'
							name='newTask'
							className='text-gray-400 border-black bg-white hover:bg-gray-400 hover:text-white h-9 rounded-md w-60 mr-4 mt-6'
						>
							Adicionar nova tarefa
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Form;
