import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { fetchUser } from './store/actions';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUser());
	});

	return (
		<div className='container'>
			<Header />
			<Outlet />
		</div>
	);
}

export default App;
