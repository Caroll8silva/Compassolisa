const RentalSchema = require('../schema/rental');

class RentalRepository { 
  
  async create(payload) {
  
    return RentalSchema.create(payload);
  
  }

  async find(payload) {

    return RentalSchema.paginate(payload);
  }

  async findOne(payload) {
    
    return RentalSchema.findById(payload);
  }
  
}
  
module.exports = new RentalRepository();   

