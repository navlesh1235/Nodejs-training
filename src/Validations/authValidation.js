import Joi from 'joi';
export const registerSchema = Joi.object({
  body: Joi.object({
    name: Joi.string().required().min(2),
    email: Joi.string().email().required(),
    phoneNumber: Joi.string().pattern(/^[0-9+ -]{7,15}$/).optional(),
    password: Joi.string().min(6).required(),
  }),
});

export const loginSchema = Joi.object({
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
});