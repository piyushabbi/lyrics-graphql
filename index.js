const dotenv = require('dotenv');
dotenv.config();
const app = require('./server/server');

const port = process.env.SERVER_PORT || 4001;

app.listen(port, () => {
	console.log(`Listening on port ${port}.`);
});
