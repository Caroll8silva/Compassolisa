const peopleSchema = require('../../schema/people');
const NotUnique = require('../../errors/NotUnique');

const isUnique = async (data) => {

  const search = await peopleSchema.findOne({ data });

  if (search) throw new NotUnique(`this ${data} already exists`);

};

module.exports = isUnique;
