const rentalSchema = require('../../schema/rental');
const NotUnique = require('../../errors/NotUnique');

const isUnique = async (data) => {

  const search = await rentalSchema.findOne({ data });

  if (search) throw new NotUnique(`this ${data} already exists`);

};

module.exports = isUnique;
