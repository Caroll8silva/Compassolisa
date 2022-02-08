const RentalSchema = require('../schema/rental');

class RentalRepository { 
  
  async create(payload) {
  
    return RentalSchema.create(payload);
  
  }
  
}
  
module.exports = new RentalRepository();   

