import types from './types';
import axios from 'axios';
window.axios = axios;
export const fetchUser = () => async (dispatch) => {
	const res = await axios.get('/api/current_user');
	return dispatch({ type: types.FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async (dispatch) => {
	const res = await axios.post('/api/stripe', token);
	return dispatch({ type: types.FETCH_USER, payload: res.data });
};
