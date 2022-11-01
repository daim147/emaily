import types from '../actions/types';

const reducer = (state = [], action) => {
	switch (action.type) {
		case types.FETCH_SURVEYS:
			return action.payload;
		default:
			return state;
	}
};

export default reducer;
