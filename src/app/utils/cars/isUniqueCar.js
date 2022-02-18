const carsSchema = require('../../schema/cars');
const NotUnique = require('../../errors/NotUnique');

const isUnique = async (data) => {

  const search = await carsSchema.findOne({ data });

  if (search) throw new NotUnique(`this ${data} already exists`);

};

module.exports = isUnique;
