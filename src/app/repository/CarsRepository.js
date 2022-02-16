const carsSchema = require('../schema/cars');

class CarsRepository { 
  async create(payload) {

    return carsSchema.create(payload);

  }

  async find(payload) {

    return carsSchema.paginate(payload);
  }

  async findOne(payload) {
    
    return carsSchema.findById(payload);
  }

  async delete(payload) {
    
    return carsSchema.findByIdAndDelete(payload);
  }

  async update(id, payload) {

    return carsSchema.findByIdAndUpdate(id, payload, { new: true });
    
  }

  async patch(id, payload) {
    return carsSchema.findOneAndUpdate(
      { id, 'acessorios._id': payload._id }, 
      { $set: { 'acessorios.$.descricao': payload.descricao }},
      { new: true}
    );
  }
    
}

module.exports = new CarsRepository();   
