import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/pt-br';
import { Trash } from '@phosphor-icons/react';
moment.locale('pt-br');

const Tasks = () => {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get('http://localhost:3001');
			const { tasks } = result.data;

			const addsCompletedKey = tasks.map((task) => ({
				...task,
				completed: false,
			}));
			setTasks(addsCompletedKey);
		};
		fetchData();
	}, []);

	const setCompleted = (index) => {
		const updatedTasks = [...tasks];
		updatedTasks[index].completed = !updatedTasks[index].completed;
		setTasks(updatedTasks);
	};

	return (
		<section className='flex flex-col items-center'>
			<h1 className='text-white'>Suas tarefas</h1>
			{tasks.map((task, index) => (
				<div
					key={index}
					onClick={() => setCompleted(index)}
					style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
					className='text-white'
				>
					{task.name}: {task.description}, {moment(task.data).format('LLLL')}
					<button
						type='button'
						id='deleteTask'
						name='deleteTask'
						className='border-black bg-black rounded-xl'
						onClick={() => console.log('xablau')}
					>
						<Trash size={16} />
					</button>
				</div>
			))}
		</section>
	);
};

export default Tasks;
