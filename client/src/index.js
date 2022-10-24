import React from 'react';
import ReactDOM from 'react-dom/client';
import 'materialize-css/dist/css/materialize.min.css';
import App from './App';
import configureStore from './store';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
} from 'react-router-dom';
import Landing from './components/Landing';
import Payments from './components/Payments';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore();
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App />}>
			<Route index element={<Landing />} />
			<Route path='payments' element={<Payments />} />
		</Route>
	)
);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);

reportWebVitals();
