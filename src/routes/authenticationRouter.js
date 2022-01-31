const AuthenticationController = require('../app/controllers/authenticationController')

module.exports = (server, routes, prefix = '/api/v1/authenticate') => {
  routes.post('/', AuthenticationController.Authenticate)
  server.use(prefix, routes) 
  
}