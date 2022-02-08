const RentalRepository = require('../repository/RentalRepository');

class RentalService { 

  async create(payload) {
      
    const result = await RentalRepository.create(payload);
    return result;
  
  }
  
  async find(payload) {

    const result = await RentalRepository.find(payload);
    return result;

  }

  async findOne(payload) {

    const result = RentalRepository.findOne(payload);
    return result;

  }

  async delete(payload) {

    const result = await RentalRepository.delete(payload);
    return result;

  }

  async update(id, payload) {
    
    const result = await RentalRepository.update(id, payload);
    return result;

  }  

}   

module.exports = new RentalService(); 
