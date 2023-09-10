import Header from './components/Header';
import Form from './components/Form';
import Tasks from './components/Tasks';

const App = () => {
	return (
		<div className='bg-neutral-800 min-h-screen'>
			<Header />
			<Form />
			<Tasks />
		</div>
	);
};
export default App;
