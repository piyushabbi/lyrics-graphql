const express = require('express');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const models = require('./models');
const schema = require('./schema/schema');

const app = express();

const mongoCredentails = {
	username: process.env.SERVER_USERNAME,
	password: process.env.SERVER_PASSWORD
};

// Replace with your mongoLab URI
const MONGO_URI = `mongodb://${mongoCredentails.username}:${
	mongoCredentails.password
}@ds263660.mlab.com:63660/lyrics-graphql-piy`;
if (!MONGO_URI) {
	throw new Error('You must provide a MongoLab URI');
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
	.once('open', () => console.log('Connected to MongoLab instance.'))
	.on('error', error => console.log('Error connecting to MongoLab:', error));

app.use(bodyParser.json());
app.use(
	'/graphql',
	expressGraphQL({
		schema,
		graphiql: true
	})
);

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
