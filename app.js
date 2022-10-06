const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const morgan = require('morgan');

const keys = require('./config/keys');
const app = express();

app.use(morgan('dev'));

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey],
	})
);
app.use(passport.initialize());
app.use(passport.session());

module.exports = app;
