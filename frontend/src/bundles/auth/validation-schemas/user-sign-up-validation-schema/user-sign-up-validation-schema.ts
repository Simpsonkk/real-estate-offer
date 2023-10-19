import joi from 'joi';

import {
  UserValidationMessage,
  UserValidationRule,
} from '../../enums/enums.js';
import { type UserSignUpRequestDto } from '../../types/types.js';

const userSignUp = joi.object<UserSignUpRequestDto, true>({
  email: joi
    .string()
    .trim()
    .email({
      tlds: {
        allow: false,
      },
    })
    .required()
    .regex(UserValidationRule.EMAIL_REGEXP)
    .min(UserValidationRule.MIN_EMAIL_LENGTH)
    .max(UserValidationRule.MAX_LOGIN_INPUT_LENGTH)
    .messages({
      'string.email': UserValidationMessage.EMAIL_WRONG,
      'string.empty': UserValidationMessage.EMAIL_REQUIRE,
      'string.pattern.base': UserValidationMessage.EMAIL_INVALID,
    }),

  password: joi
    .string()
    .trim()
    .required()
    .min(UserValidationRule.MIN_PASSWORD_LENGTH)
    .max(UserValidationRule.MAX_LOGIN_INPUT_LENGTH)
    .regex(UserValidationRule.PASSWORD_REGEXP)
    .messages({
      'string.empty': UserValidationMessage.PASSWORD_REQUIRE,
      'string.min': UserValidationMessage.PASSWORD_SHORT,
      'string.pattern.base': UserValidationMessage.PASSWORD_WRONG,
    }),

  fullName: joi
    .string()
    .min(UserValidationRule.MIN_FULL_NAME_LENGTH)
    .max(UserValidationRule.MAX_FULL_NAME_LENGTH)
    .required()
    .pattern(/^[ '.A-Za-z-]+$/)
    .messages({
      'string.base': UserValidationMessage.FULL_NAME_NOT_STRING,
      'string.min': UserValidationMessage.FULL_NAME_MIN_LENGTH,
      'string.max': UserValidationMessage.FULL_NAME_MAX_LENGTH,
      'string.pattern.base': UserValidationMessage.FULL_NAME_WRONG_PATTERN,
    }),
});

export { userSignUp };
