const peopleController = require('../app/controllers/PeopleController');
const postPeopleValidation = require('../app/validation/people/createPeople');
const getPeopleValidation = require('../app/validation/people/getPeople');
const idValidation = require('../app/validation/idValidation');

module.exports = (server, routes, prefix = '/api/v1/people') => {
  routes.post('/', postPeopleValidation, peopleController.createPeople);
  routes.get('/', getPeopleValidation, peopleController.getAllPeople);
  routes.get('/:id', idValidation, getPeopleValidation, peopleController.getOnePerson);
  routes.delete('/:id', idValidation, peopleController.deletePeople);
  routes.put('/:id', getPeopleValidation, peopleController.updatePeople);
  server.use(prefix, routes); 
}; 