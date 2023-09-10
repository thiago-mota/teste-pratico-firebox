import { useEffect, useState } from 'react';
import axios from 'axios';

const Tasks = () => {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get('http://localhost:3001');
			const { tasks } = result.data;
			console.log(tasks);
			setTasks(tasks);
		};
		fetchData();
	}, []);

	console.log('ESTADO --->>', tasks);

	return (
		<section>
			Suas atividades
			{tasks.map((task, index) => (
				<div key={index}>
					Nome: {task.name}, Descrição: {task.description}, Data: {task.data}
				</div>
			))}
		</section>
	);
};

export default Tasks;
