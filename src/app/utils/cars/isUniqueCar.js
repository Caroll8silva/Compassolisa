const carsSchema = require('../../schema/cars');
const NotUnique = require('../../errors/NotUnique');

const isUnique = async (modelo) => {

  const search = await carsSchema.findOne({ modelo });

  if (search) throw new NotUnique(`this ${modelo} already exists`);

};

module.exports = isUnique;
