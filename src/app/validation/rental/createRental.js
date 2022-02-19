const Joi = require('joi').extend(require('@joi/date'));

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      nome: Joi
        .string()
        .trim()
        .min(3)
        .required(),
      cnpj: Joi
        .string()
        .trim()
        .min(14)
        .max(18)
        .pattern(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/)
        .required(),
      atividades: Joi
        .string()
        .trim()
        .required(),
      endereco: Joi
        .array()
        .unique()
        .items({
          cep: Joi
            .string()
            .trim()
            .min(1)
            .required(),
          logradouro: Joi
            .string(),
          complemento: Joi
            .string(),
          bairro: Joi
            .string(),
          number: Joi
            .string()
            .required(),
          localidade: Joi
            .string(),
          uf: Joi
            .string(),
          isFilial: Joi
            .boolean()
            .required(),
        })
        .min(1),
    });
  
    const { error } = await schema.validate(req.body, { abortEarly: false });
    if (error) throw error;
    return next();
  } catch (error) {
    return res.status(400).json({'description:': error.name, 'name:': error.message});
  }
  
};