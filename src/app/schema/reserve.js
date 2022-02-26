const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const ReserveSchema = mongoose.Schema(
  {
    id_user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'people',
      required: true
    },
    data_inicio: {
      type: String,
      required: true
    },
    data_fim: {
      type: String,
      required: true
    },
    id_carro: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'cars',
      required: true
    },
    id_locadora: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'rental',
      required: true
    },
    valor_final: {
      type: Number,
      required: true
    }
  });
ReserveSchema.set('toJSON', {
  transform (doc, rest){
    
    delete rest.__v; 
  }
});

ReserveSchema.plugin(mongoosePaginate);

const Rent = mongoose.model('reserve', ReserveSchema);

module.exports = Rent;