const Joi = require('joi');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
    
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