const carsController = require('../app/controllers/carsController');
const postValidation = require('../app/validation/cars/createCar');

module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes.post('/', postValidation, carsController.createCar);
  routes.get('/', carsController.getAllCars);
  routes.get('/:id', carsController.getOneCar);
  routes.delete('/:id', carsController.deleteCar);
  routes.put('/:id', postValidation, carsController.updateCar);
  server.use(prefix, routes); 
};