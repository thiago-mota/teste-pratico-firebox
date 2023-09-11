import Header from './components/Header';
import Form from './components/Form';
import Tasks from './components/Tasks';
import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		fetchData().then((data) => setTasks(data));
	}, []);

	const fetchData = async () => {
		const result = await axios.get('http://localhost:3001');
		const { tasks } = result.data;
		return tasks;
	};

	return (
		<div className='bg-neutral-800 min-h-screen'>
			<Header />
			<Form
				tasks={tasks}
				setTasks={setTasks}
			/>
			<Tasks
				tasks={tasks}
				setTasks={setTasks}
			/>
		</div>
	);
};
export default App;
