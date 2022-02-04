const peopleSchema = require('../../schema/people');
const NotUnique = require('../../errors/NotUnique');

const isUnique = async (email) => {

  const unique = await peopleSchema.findOne({ email });

  if (unique) throw new NotUnique('this email already exists');

};

module.exports = isUnique;
