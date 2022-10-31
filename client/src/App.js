import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import { fetchUser } from './store/actions';

function App() {
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);
	const navigate = useNavigate();

	useEffect(() => {
		if (auth) {
			navigate('/surveys');
		}
	}, [auth, navigate]);

	useEffect(() => {
		dispatch(fetchUser());
	}, [dispatch]);

	return (
		<div className='container'>
			<Header />
			<Outlet />
		</div>
	);
}

export default App;
