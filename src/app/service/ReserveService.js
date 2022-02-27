const reserveRepository = require('../repository/ReserveRepository');

class ReserveService { 

  async create(payload) {
    
    const result = await reserveRepository.create(payload);
    return result;

  }
  
}   

module.exports = new ReserveService();  
