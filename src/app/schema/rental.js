const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const RentalSchema = mongoose.Schema(
  {
    nome: {
      type: String,
      required: true
    },
    cnpj: {
      type: String,
      required: true,
      unique: true
    },
    atividades: {
      type: String,
      required: true
    },
    endereco: [
      {
        cep: {
          type: String
        },
        logradouro: {
          type: String,
        },
        complemento: {
          type: String
        },
        bairro: {
          type: String,
        },
        number: {
          type: String,
          required: true
        },
        localidade: {
          type: String,
        },
        uf: {
          type: String,
        },
        isFilial: {
          type: Boolean,
          required: true
        }
      }
    ]
  }
);

RentalSchema.set('toJSON', {
  transform (doc, rest){
  
    delete rest.__v; 
  }
});

RentalSchema.plugin(mongoosePaginate);

const carRental = mongoose.model('rental', RentalSchema);

module.exports = carRental;
