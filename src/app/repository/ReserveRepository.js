const reserveSchema = require('../schema/reserve');

class ReserveRepository { 
  async create(payload) {

    return reserveSchema.create(payload);

  }
    
}

module.exports = new ReserveRepository();   
