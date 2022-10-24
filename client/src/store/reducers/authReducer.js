import types from '../actions/types';

const reducer = function (state = null, action) {
	switch (action.type) {
		case types.FETCH_USER:
			return action.payload || false;
		default:
			return state;
	}
};

export default reducer;
