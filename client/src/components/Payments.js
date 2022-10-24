import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { useState, useEffect } from 'react';
import axios from 'axios';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const Payments = () => {
	const [clientSecret, setClientSecret] = useState('');

	useEffect(() => {
		// Create PaymentIntent as soon as the page loads
		axios.get('/api/stripe').then((data) => setClientSecret(data.data.clientSecret));
	}, []);

	const appearance = {
		theme: 'stripe',
	};
	const options = {
		clientSecret,
		appearance,
	};

	return (
		<div className='App'>
			{clientSecret && (
				<Elements options={options} stripe={stripePromise}>
					<CheckoutForm />
				</Elements>
			)}
		</div>
	);
};

export default Payments;
