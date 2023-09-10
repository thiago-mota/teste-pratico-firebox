import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-br');

const Tasks = () => {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get('http://localhost:3001');
			const { tasks } = result.data;
			setTasks(tasks);
		};
		fetchData();
	}, []);

	return (
		<section>
			Suas tarefas
			{tasks.map((task, index) => (
				<div key={index}>
					{task.name}: {task.description}, {moment(task.data).format('LLLL')}
				</div>
			))}
		</section>
	);
};

export default Tasks;
