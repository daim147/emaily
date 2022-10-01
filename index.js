const express = require('express');

const app = express();

app.get('/', (req, res) => {
	let count = 0;
	for (let i = 0; i < 1e9; i++) {
		count++;
	}
	res.send({ count });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log('Server listening on ' + PORT);
});
