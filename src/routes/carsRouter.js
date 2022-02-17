const carsController = require('../app/controllers/CarsController');
const postValidation = require('../app/validation/cars/createCar');
const getValidation = require('../app/validation/cars/getCar');
const patchValidation = require('../app/validation/cars/patchCar');
const authentication = require('../app/validation/authentication');

module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes.post('/', authentication, postValidation, carsController.createCar);
  routes.get('/', authentication, getValidation, carsController.getAllCars);
  routes.get('/:id', authentication, getValidation, carsController.getOneCar);
  routes.delete('/:id', authentication, carsController.deleteCar);
  routes.put('/:id', authentication, getValidation, carsController.updateCar);
  routes.patch('/:id/acessorios/:id2', authentication,  patchValidation, carsController.updateAcessories);
  server.use(prefix, routes); 
};