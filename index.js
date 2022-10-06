const mongoose = require('mongoose');

const app = require('./app');
const keys = require('./config/keys');
require('./models');
require('./service/passport');
require('./routes');

mongoose.connect(keys.mongoURI, () => {
	console.log('Database connection successful');
});

const PORT = process.env.PORT || 1000;
app.listen(PORT, () => {
	console.log('Server listening on ' + PORT);
});
