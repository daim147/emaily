const mongoose = require('mongoose');

const app = require('./app');
const keys = require('./config/keys');
require('./models');
require('./service/passport');
require('./routes');

if (process.env.NODE_ENV === 'production') {
	// Express will serve up production assets
	// like our main.js file, or main.css file!
	const express = require('express');
	app.use(express.static('client/build'));

	// Express will serve up the index.html file
	// if it doesn't recognize the route
	const path = require('path');
	app.get('*', (_, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

mongoose.connect(keys.mongoURI, () => {
	console.log('Database connection successful');
});

const PORT = process.env.PORT || 1000;
app.listen(PORT, () => {
	console.log('Server listening on ' + PORT);
});
