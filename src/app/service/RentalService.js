const RentalRepository = require('../repository/RentalRepository');
const isUniqueCnpj = require('../utils/rental/isUniqueCnpj');
const AddressValid = require('../utils/rental/AddressValid');

class RentalService { 

  async create(payload) {
    
    await isUniqueCnpj(payload.cnpj);
    await AddressValid.searchCep(payload);
    await AddressValid.filialValid(payload);
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

    await isUniqueCnpj(payload.cnpj);
    const result = await RentalRepository.update(id, payload);
    return result;

  }  

}   

module.exports = new RentalService();  
