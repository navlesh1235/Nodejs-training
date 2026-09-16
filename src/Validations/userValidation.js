import Joi from 'joi';

export const createUserSchema = Joi.object({
  body: Joi.object({
    name: Joi.string().required().min(2),
    email: Joi.string().email().required(),
    phoneNumber: Joi.string().optional(),
    password: Joi.string().min(6).required(),
    role: Joi.string().valid('user', 'admin').optional(),
  }),
});

export const updateUserSchema = Joi.object({
  params: Joi.object({
    id: Joi.string().hex().length(24).required(),
  }),
  body: Joi.object({
    name: Joi.string().min(2).optional(),
    email: Joi.string().email().optional(),
    phoneNumber: Joi.string().optional(),
    password: Joi.string().min(6).optional(),
    role: Joi.string().valid('user', 'admin').optional(),
  }).min(1),
});

export const userIdParamSchema = Joi.object({
  params: Joi.object({
    id: Joi.string().hex().length(24).required().messages({
      'string.length': 'Invalid MongoDB ObjectId',
    }),
  }),
});


export const deleteUserSchema = Joi.object({
  params: Joi.object({
    id: Joi.string().hex().length(24).required().messages({
      'string.length': 'Invalid MongoDB ObjectId',
      'string.hex': 'ID must be a valid hexadecimal string',
      'any.required': 'User ID is required to delete the user',
    }),
  }),
});