const peopleSchema = require('../../schema/people');
const NotUnique = require('../../errors/NotUnique');

const isUnique = async (cpf) => {

  const search = await peopleSchema.findOne({ cpf });

  if (search) throw new NotUnique(`this cpf ${cpf} already exists`);

};

module.exports = isUnique;
