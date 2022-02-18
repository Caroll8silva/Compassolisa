const RentalController = require('../app/controllers/RentalController');
const postRentalValidation = require('../app/validation/rental/createRental');
const idValidation = require('../app/validation/idValidation');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.post('/', postRentalValidation, RentalController.createRental);
  routes.get('/', RentalController.getAllRentals);
  routes.get('/:id', idValidation, RentalController.getOneRental);
  routes.delete('/:id', idValidation, RentalController.deleteRental);
  routes.put('/:id', idValidation, RentalController.updateRental);
  server.use(prefix, routes); 
};