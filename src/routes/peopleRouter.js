const peopleController = require('../app/controllers/peopleController')

module.exports = (server, routes, prefix = '/api/v1/people') => {
  routes.post('/', peopleController.createPeople)
  server.use(prefix, routes) 
}