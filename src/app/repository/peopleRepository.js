const NotUnique = require('../errors/notUnique');
const peopleSchema = require('../schema/people');

class PeopleRepository { 
  async create(payload) {
    
    const cpfUnique = async (cpf) => {
     
      const unique = await peopleSchema.findOne({ cpf });
      if (unique) throw new NotUnique('There is already a user with this cpf');
    };
    const emailUnique = async (email) => {
     
      const unique = await peopleSchema.findOne({ email });
      if (unique) throw new NotUnique('There is already a user with this email');
    };
    await cpfUnique(payload.cpf);
    await emailUnique(payload.email);
    return peopleSchema.create(payload);
  }

  async find(payload) {

    return peopleSchema.paginate(payload);
  }

  async findOne(payload) {
    
    return peopleSchema.findById(payload);
  }

  async delete(payload) {
    
    return peopleSchema.findByIdAndDelete(payload);
  }

  async update(id, payload) {
    
    return peopleSchema.findByIdAndUpdate(id, payload, { new: true });
  }
}

module.exports = new PeopleRepository();   