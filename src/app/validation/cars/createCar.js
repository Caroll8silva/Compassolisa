const Joi = require('joi');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      modelo: Joi
        .string()
        .trim()
        .required(),
      cor: Joi
        .string()
        .trim()
        .required(),
      ano: Joi
        .number()
        .trim()
        .integer()
        .min(1950)
        .max(2022)
        .required(),
      acessorios: Joi
        .array()
        .items({ 
          descricao: Joi
            .string()
            .required()
            .trim()
        })
        .unique()
        .min(1),
      quantidadePassageiros: Joi
        .number()
        .trim()
        .required()
    });
  
    const { error } = await schema.validate(req.body, { abortEarly: false });
    if (error) throw error;
    return next();
  } catch (error) {
    return res.status(400).json({'description:': error.name, 'name:': error.message});
  }
};