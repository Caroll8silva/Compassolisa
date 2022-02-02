const carsSchema = require('../schema/cars.js');
const NotUnique = require('../errors/NotUnique');

class CarsRepository { 
  async create(payload) {
    
    const modelUnique = async (modelo) => {
      const unique = await carsSchema.findOne({ modelo });
      if (unique) throw new NotUnique('There is already a car with this model');
    };
    await modelUnique(payload.modelo);
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

    const modelUnique = async (modelo) => {
      const unique = await carsSchema.findOne({ modelo });
      if (unique) throw new NotUnique('There is already a car with this model');
    };
    await modelUnique(payload.modelo);
    return carsSchema.findByIdAndUpdate(id, payload, { new: true });
    
  }
}

module.exports = new CarsRepository();   