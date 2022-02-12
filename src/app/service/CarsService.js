const CarsRepository = require('../repository/CarsRepository.js');
const isUnique = require('../utils/cars/isUniqueCar');

class CarsService { 

  async create(payload) {
    
    await isUnique(payload.modelo);
    const result = await CarsRepository.create(payload);
    return result;

  }

  async find(payload) {

    const result = await CarsRepository.find(payload);
    return result;

  }

  async findOne(payload) {

    const result = CarsRepository.findOne(payload);
    return result;

  }

  async delete(payload) {

    const result = await CarsRepository.delete(payload);
    return result;

  }

  async update(id, payload) {
    
    await isUnique(payload.modelo);
    const result = await CarsRepository.update(id, payload);
    return result;

  }
 
  async patch(id, payload) {
    
    const result = await CarsRepository.patch({ id }, payload);
    return result;

  }   
} 

module.exports = new CarsService(); 


