const express = require('express');
const keys = require('../config/keys');
const app = require('../app');
const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');
const User = mongoose.model('users');
const stripe = require('stripe')(keys.stripeSecretKey);

app.get('/api/stripe', requireLogin, async (req, res) => {
	const session = await stripe.checkout.sessions.create({
		payment_method_types: ['card'],
		success_url: `${req.protocol}://${req.get('host')}`,
		cancel_url: `${req.protocol}://${req.get('host')}`,
		client_reference_id: req.user.id,
		mode: 'payment',
		line_items: [
			{
				price_data: {
					currency: 'usd',
					unit_amount: 500,
					product_data: {
						name: `Emaily Credits`,
						description: '$5 for 5 email credits',
					},
				},
				quantity: 1,
			},
		],
	});

	res.redirect(303, session.url);
});

app.post('/webhook', express.raw({ type: 'application/json' }), async (request, response) => {
	const payload = request.body;
	const sig = request.headers['stripe-signature'];
	let event;

	try {
		event = stripe.webhooks.constructEvent(payload, sig, keys.stripeEndPointSecret);
	} catch (err) {
		return response.status(400).send(`Webhook Error: ${err.message}`);
	}
	// Handle the checkout.session.completed event
	if (event.type === 'checkout.session.completed') {
		const session = event.data.object;
		User.findById(session.client_reference_id).then((user) => {
			user.credits += 5;
			console.log(user, 'USER');
			user.save();
		});
	}

	response.status(200);
});
