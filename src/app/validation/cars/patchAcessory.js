const Joi = require('joi');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      id: Joi
        .string()
        .min(24)
        .max(24)
        .pattern(/^[0-9A-Fa-f\d]/),
      id2: Joi
        .string()
        .min(24)
        .max(24)
        .pattern(/^[0-9A-Fa-f\d]/),
      descricao: Joi
        .string()
        .trim()
        .min(3)
        .required()

    });
       
  
    const { error } = await schema.validate(req.body, { abortEarly: false });
    if (error) throw error;
    return next();
  } catch (error) {
    return res.status(400).json({'description:': error.name, 'name:': error.message});
  }
};