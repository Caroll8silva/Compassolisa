const CarsRepository = require('../repository/carsRepository.js');

class CarsService { 

  async create(payload) {
        
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

    const result = await CarsRepository.update(id, payload);
    return result;

  }  
} 

module.exports = new CarsService(); 


