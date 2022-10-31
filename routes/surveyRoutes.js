const mongoose = require('mongoose');
const app = require('../app');
const requireCredits = require('../middlewares/requireCredits');
const requireLogin = require('../middlewares/requireLogin');
const surveyTemplate = require('../service/emailTemplates/surveyTemplate');
const Mailer = require('../service/Mailer');
const Survey = mongoose.model('surveys');

app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
	const { title, subject, body, recipients } = req.body;

	const survey = new Survey({
		title,
		subject,
		body,
		recipients: recipients.split(',').map((email) => ({ email: email.trim() })),
		_user: req.user.id,
		dateSent: Date.now(),
	});

	// Great place to send an email!
	const mailer = new Mailer(survey, surveyTemplate(survey));

	try {
		await mailer.send();
		await survey.save();
		req.user.credits -= 1;
		const user = await req.user.save();
		console.log(user);
		res.send(user);
	} catch (err) {
		res.status(422).send(err);
	}
});
