const axios = require('axios');
const RentalSchema = require('../schema/rental');

class RentalRepository { 
  
  async findCep(payload) {

    const response = await axios.get(`https://viacep.com.br/ws/${payload}/json`);
    return response.data;

  }
  
  async create(payload) {
  
    return RentalSchema.create(payload);
  }

  async find(payload) {

    return RentalSchema.paginate(payload);
  }

  async findOne(payload) {
    
    return RentalSchema.findById(payload);
  }

  async delete(payload) {
    
    return RentalSchema.findByIdAndDelete(payload);
  }

  async update(id, payload) {

    return RentalSchema.findByIdAndUpdate(id, payload, { new: true });
  }
  
}
  
module.exports = new RentalRepository();   

