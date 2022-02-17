const Joi = require('joi').extend(require('@joi/date'));

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      id: Joi
        .string()
        .regex(/[0-9a-fA-F]{24}/)
        .required()
      
    });
  
    const { error } = await schema.validate(req.body, { abortEarly: false });
    if (error) throw error;
    return next();
  } catch (error) {
    return res.status(400).json({'description:': error.name, 'name:': error.message});
  }
  
};