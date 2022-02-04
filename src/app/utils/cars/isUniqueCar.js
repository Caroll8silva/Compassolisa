const carsSchema = require('../../schema/cars');
const NotUnique = require('../../errors/NotUnique');

const isUnique = async (modelo) => {

  const unique = await carsSchema.findOne({ modelo });

  if (unique) throw new NotUnique('this car model already exists');

};

module.exports = isUnique;
