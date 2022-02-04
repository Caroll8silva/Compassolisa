const peopleController = require('../app/controllers/peopleController');
const peopleValidation = require('../app/validation/people/createPeople');
const getPeopleValidation = require('../app/validation/people/getPeople');

module.exports = (server, routes, prefix = '/api/v1/people') => {
  routes.post('/', peopleValidation, peopleController.createPeople);
  routes.get('/', getPeopleValidation, peopleController.getAllPeople);
  routes.get('/:id', getPeopleValidation, peopleController.getOnePerson);
  routes.delete('/:id', peopleController.deletePeople);
  routes.put('/:id', getPeopleValidation, peopleController.updatePeople);
  server.use(prefix, routes); 
}; 