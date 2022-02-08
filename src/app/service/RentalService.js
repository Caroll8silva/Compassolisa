const RentalRepository = require('../repository/RentalRepository');
const isUnique = require('../utils/rental/isUniqueCnpj');

class RentalService { 

  async create(payload) {
     
    await isUnique(payload.cnpj);
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
    
    await isUnique(payload.cnpj);
    const result = await RentalRepository.update(id, payload);
    return result;

  }  

}   

module.exports = new RentalService(); 
