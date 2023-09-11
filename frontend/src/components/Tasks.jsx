import axios from 'axios';
import moment from 'moment';
import 'moment/locale/pt-br';
import { Trash } from '@phosphor-icons/react';
moment.locale('pt-br');

const Tasks = ({ tasks, setTasks, fetchData }) => {
	const setCompleted = async (task) => {
		const updatedTask = {
			...task,
			status: !task.status,
		};

		const { name, description, data, status } = updatedTask;

		await axios.put(`http://localhost:3001/${task.id}`, {
			name,
			description,
			data,
			status,
		});

		setTasks(await fetchData());
	};

	const deleteTask = async (id) => {
		await axios.delete(`http://localhost:3001/${id}`);
		setTasks(await fetchData());
	};

	return (
		<section className='flex flex-col items-center '>
			<h1 className='text-white text-2xl m-2'>Suas tarefas</h1>
			<div>
				{tasks.map((task, index) => (
					<div
						key={index}
						onClick={() => setCompleted(task)}
						style={{ textDecoration: task.status ? 'line-through' : 'none' }}
						className='text-white border border-gray-400 rounded hover:bg-white hover:text-neutral-600 m-2'
					>
						{task.name}: {task.description}, {moment(task.data).format('llll')}
						<button
							type='button'
							id='deleteTask'
							name='deleteTask'
							onClick={() => deleteTask(task.id)}
						>
							{' '}
							<Trash size={16} />
						</button>
					</div>
				))}
			</div>
		</section>
	);
};

export default Tasks;
