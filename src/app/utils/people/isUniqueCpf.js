const peopleSchema = require('../../schema/people');
const NotUnique = require('../../errors/NotUnique');

const isUnique = async (cpf) => {

  const unique = await peopleSchema.findOne({ cpf });

  if (unique) throw new NotUnique('this cpf already exists');

};

module.exports = isUnique;
