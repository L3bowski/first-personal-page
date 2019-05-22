const express = require('express');
const session = require('express-session');
const { join } = require('path');
const pagesController = require('./controllers/pages-controller');

const defaultConfig = {
    SESSION_SECRET: 'to be replaced with environment variables',
};

module.exports = (environmentConfig = {}) => {
	const app = express();
	app.set('view engine', 'ejs');
	app.use('/', express.static(join(__dirname, 'public')));
	app.use(session({
        secret: environmentConfig.SESSION_SECRET || defaultConfig.SESSION_SECRET,
        resave: false,
        saveUninitialized: true
	}));
	app.get('/', pagesController.resolve);
	return app;
};
