const bcrypt = require('bcryptjs/dist/bcrypt');
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const PeopleSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    unique: true,
    required: true
  },
  data_nascimento: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  senha: {
    type: String,
    required: true,
    select: false
  },
  habilitado: {
    type: String,
    enum: ['sim', 'não'],
    required: true
  }
});

PeopleSchema.set('toJSON', {
  transform (doc, rest){
  
    delete rest.__v; 
  }
});

PeopleSchema.pre('save', async function password(next){
  const hash = await bcrypt.hash(this.senha, 10);
  this.senha = hash;
  next();

});

PeopleSchema.plugin(mongoosePaginate);

const person = mongoose.model('people', PeopleSchema);
module.exports = person;