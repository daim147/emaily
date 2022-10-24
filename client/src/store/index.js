import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers';
import reduxThunk from 'redux-thunk';

export default function configureStore(preloadedState) {
	const middlewares = [reduxThunk];
	const middlewareEnhancer = applyMiddleware(...middlewares);
	const composeEnhancers =
		typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
			? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
			: compose;
	const enhancers = [middlewareEnhancer];
	const composedEnhancers = composeEnhancers(...enhancers);

	const store = createStore(rootReducer, preloadedState, composedEnhancers);

	return store;
}
