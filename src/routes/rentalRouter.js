const RentalController = require('../app/controllers/RentalController');
const createRentalValidation = require('../app/validation/rental/createRental');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.post('/', createRentalValidation, RentalController.createRental);
  routes.get('/', RentalController.getAllRentals);
  routes.get('/:id', RentalController.getOneRental);
  routes.delete('/:id', RentalController.deleteRental);
  routes.put('/:id', RentalController.updateRental);
  server.use(prefix, routes); 
};