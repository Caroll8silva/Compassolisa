const rentalSchema = require('../../schema/rental');
const NotUnique = require('../../errors/NotUnique');

const isUnique = async (cnpj) => {

  const unique = await rentalSchema.findOne({ cnpj });

  if (unique) throw new NotUnique('this Cnpj already exists');

};

module.exports = isUnique;
