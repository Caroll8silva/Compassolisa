const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const CarsSchema = mongoose.Schema({
  modelo: {
    type: String,
    required: true,
    unique: true
  },
  cor: {
    type: String,
    required: true
  },
  ano: {
    type: Number,
    required: true
  },
  acessorios: [
    {
      descricao: {
        type: String,
        required: true,
        unique: true
      }
    }
  ],
  quantidadePassageiros: {
    type: Number,
    required: true
  }
});

CarsSchema.set('toJSON', {
  transform (doc, rest){
  
    delete rest.___v; 
  }
});

CarsSchema.plugin(mongoosePaginate);

const car = mongoose.model('cars', CarsSchema);

module.exports = car;