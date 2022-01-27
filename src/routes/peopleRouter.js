const peopleController = require('../app/controllers/peopleController')

module.exports = (server, routes, prefix = '/api/v1/people') => {
  routes.post('/', peopleController.createPeople)
  routes.get('/', peopleController.getAllPeople)
  routes.get('/:id', peopleController.getOnePerson)
  routes.delete('/:id', peopleController.deletePeople)
  server.use(prefix, routes) 
} 