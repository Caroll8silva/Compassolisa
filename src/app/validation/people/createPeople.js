const Joi = require('joi').extend(require('@joi/date'));
const cpfValidate = require('../../utils/people/cpfValidate');

module.exports = async (req, res, next) => {  
  try {
    const schema = Joi.object({
      nome: Joi
        .string()
        .trim()
        .required()
        .min(3),
      cpf: Joi
        .string()
        .trim()
        .required()
        .pattern(/^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/, cpfValidate)
        .min(11)
        .max(14),
      data_nascimento: Joi
        .date()
        .required()
        .format('DD/MM/YYYY')
        .less('01/01/2004')
        .max('now'),
      email: Joi
        .string()
        .trim()
        .email()
        .required(),
      senha: Joi
        .string()
        .trim()
        .required()
        .min(6),
      habilitado: Joi
        .string()
        .required()
        .valid('sim', 'Sim', 'não', 'Não')
    });
  
    const { error } = await schema.validate(req.body, { abortEarly: false });
    if (error) throw error;
    return next();
  } catch (error) {
    return res.status(400).json({'description:': error.name, 'name:': error.message});
  }
  
};