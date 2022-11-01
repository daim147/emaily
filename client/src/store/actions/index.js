import types from './types';
import axios from 'axios';
window.axios = axios;
export const fetchUser = () => async (dispatch) => {
	const res = await axios.get('/api/current_user');
	return dispatch({ type: types.FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, navigate) => async (dispatch) => {
	const res = await axios.post('/api/surveys', values);
	navigate('/surveys');
	dispatch({ type: types.FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async (dispatch) => {
	const res = await axios.get('/api/surveys');

	dispatch({ type: types.FETCH_SURVEYS, payload: res.data });
};
