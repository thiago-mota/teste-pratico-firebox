import * as Icon from '@phosphor-icons/react';

const Header = () => {
	return (
		<header>
			<div className='flex items-center justify-center h-96 bg-black '>
				<Icon.ListChecks className='text-sky-400 text-4xl font-bold' />
				&nbsp;&nbsp;&nbsp;
				<h1 className=' text-4xl font-bold p-15'>
					<span className='text-sky-400'>to</span>
					<span className='text-indigo-600'>do</span>
					&nbsp;&nbsp;&nbsp;
				</h1>
			</div>
		</header>
	);
};

export default Header;
