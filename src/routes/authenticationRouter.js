const AuthenticationController = require('../app/controllers/AuthenticationController');

module.exports = (server, routes, prefix = '/api/v1/authenticate') => {
  routes.post('/', AuthenticationController.Authenticate);
  server.use(prefix, routes);
};
