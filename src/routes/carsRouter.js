const carsController = require('../app/controllers/CarsController');
const postValidation = require('../app/validation/cars/createCar');
const getValidation = require('../app/validation/cars/getCar');

module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes.post('/', postValidation, carsController.createCar);
  routes.get('/', getValidation, carsController.getAllCars);
  routes.get('/:id', getValidation, carsController.getOneCar);
  routes.delete('/:id', carsController.deleteCar);
  routes.put('/:id', getValidation, carsController.updateCar);
  server.use(prefix, routes); 
};