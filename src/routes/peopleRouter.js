const peopleController = require('../app/controllers/peopleController')
const peopleValidation = require('../app/validation/people/createPeople')

module.exports = (server, routes, prefix = '/api/v1/people') => {
  routes.post('/', peopleValidation, peopleController.createPeople)
  routes.get('/', peopleController.getAllPeople)
  routes.get('/:id', peopleController.getOnePerson)
  routes.delete('/:id', peopleController.deletePeople)
  routes.put('/:id', peopleController.updatePeople)
  server.use(prefix, routes) 
} 