const Joi = require('joi').extend(require('@joi/date'));

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      id: Joi
        .string()
        .min(24)
        .max(24)
        .pattern(/^[0-9A-Fa-f\d]{24}$/)
        
    });
  
    const { error } = await schema.validate(req.body, { abortEarly: false });
    if (error) throw error;
    return next();
  } catch (error) {
    return res.status(400).json({'description:': error.name, 'name:': error.message});
  }
  
}; 