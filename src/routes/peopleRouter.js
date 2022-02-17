const peopleController = require('../app/controllers/PeopleController');
const peopleValidation = require('../app/validation/people/createPeople');
const getPeopleValidation = require('../app/validation/people/getPeople');
const idValidation = require('../app/validation/idmongo');

module.exports = (server, routes, prefix = '/api/v1/people') => {
  routes.post('/', peopleValidation, peopleController.createPeople);
  routes.get('/', getPeopleValidation, peopleController.getAllPeople);
  routes.get('/:id', idValidation, getPeopleValidation, peopleController.getOnePerson);
  routes.delete('/:id', idValidation, peopleController.deletePeople);
  routes.put('/:id', idValidation, getPeopleValidation, peopleController.updatePeople);
  server.use(prefix, routes); 
}; 