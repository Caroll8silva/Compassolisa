const peopleSchema = require('../../schema/people');
const NotUnique = require('../../errors/NotUnique');

const isUnique = async (email) => {

  const search = await peopleSchema.findOne({ email });

  if (search) throw new NotUnique(`this ${email} already exists`);

};

module.exports = isUnique;
