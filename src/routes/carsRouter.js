const carsController = require('../app/controllers/CarsController');
const postValidation = require('../app/validation/cars/createCar');
const getValidation = require('../app/validation/cars/getCar');
const patchValidation = require('../app/validation/cars/patchCar');

module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes.post('/', postValidation, carsController.createCar);
  routes.get('/', getValidation, carsController.getAllCars);
  routes.get('/:id', getValidation, carsController.getOneCar);
  routes.delete('/:id', carsController.deleteCar);
  routes.put('/:id', getValidation, carsController.updateCar);
  routes.patch('/:id/acessorios/:id2', patchValidation, carsController.updateAcessories);
  server.use(prefix, routes); 
};