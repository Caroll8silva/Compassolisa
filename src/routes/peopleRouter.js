const peopleController = require('../app/controllers/peopleController')

module.exports = (server, routes, prefix = '/api/v1/people') => {
  routes.post('/', peopleController.createPeople)
  routes.get('/', peopleController.getAllPeople)
  server.use(prefix, routes) 
} 