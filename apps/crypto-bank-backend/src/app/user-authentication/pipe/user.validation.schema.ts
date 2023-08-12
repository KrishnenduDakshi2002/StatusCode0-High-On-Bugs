import joi from 'joi';

export const userValidationSchema = joi.object({
  email: joi.string().email(),
  email_verified: joi.boolean().required(),
  name: joi.string().required(),
  picture: joi.string().required(),
  sub: joi.string().required(),
});

export const walletValidationSchema = joi.object({
  wallet: joi.string().required(),
  email: joi.string().email().required(),
  sub: joi.string().required(),
});
