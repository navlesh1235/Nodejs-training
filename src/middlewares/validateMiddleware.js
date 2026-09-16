import ApiError from '../utils/apiError.js';

export const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(
    { body: req.body, query: req.query, params: req.params },
    { abortEarly: false, allowUnknown: true }
  );

  if (error) {
    const errorMessage = error.details.map((detail) => detail.message).join(', ');
    return next(new ApiError(400, errorMessage));
  }
  next();
};