const { configureEndpoints } = require('modena');
const pagesController = require('./controllers/pages-controller');

module.exports = configureEndpoints((router, config, middleware) => {
	router.get('/', middleware.session, pagesController.resolve);
});
