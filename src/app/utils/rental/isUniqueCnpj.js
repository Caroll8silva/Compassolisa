const rentalSchema = require('../../schema/rental');
const NotUnique = require('../../errors/NotUnique');

const isUnique = async (cnpj) => {

  const search = await rentalSchema.findOne({ cnpj });

  if (search) throw new NotUnique(`this ${cnpj} already exists`);

};

module.exports = isUnique;
