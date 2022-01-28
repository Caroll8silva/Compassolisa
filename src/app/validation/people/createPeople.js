const Joi = require('joi').extend(require('@joi/date'))

module.exports = async (req, res, next) => {  
    try {
      const schema = Joi.object({
        nome: Joi
        .string()
        .required(),
        cpf: Joi
        .string()
        .required()
        .pattern(/^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/)
        .min(11)
        .max(14),
        data_nascimento: Joi
        .date()
        .required()
        .format('DD/MM/YYYY'),
        email: Joi
        .string()
        .email()
        .required(),
        senha: Joi
        .string()
        .required()
        .min(6),
        habilitado: Joi
        .string()
        .required()
      });
  
      const { error } = await schema.validate(req.body, { abortEarly: false })
        if (error) throw error
            return next()
    } catch (error) {
            return res.status(400).json(error.message)
      }
  
  }