const UserValidationMessage = {
  FULL_NAME_NOT_STRING: 'Full name must be a string',
  FULL_NAME_MIN_LENGTH:
    'Full name must be at least {{#limit}} characters',
  FULL_NAME_MAX_LENGTH: 'Full name must be at most {{#limit}} characters',
  FULL_NAME_WRONG_PATTERN:
    'Full name must contain only letters, spaces, (.) and (-)',
  EMAIL_REQUIRE: 'Email is required',
  EMAIL_WRONG: 'Email is wrong',
  EMAIL_INVALID: 'Email should be valid',
  PASSWORD_WRONG:
    'Password should contain at least one uppercase letter (A-Z), one lowercase letter (a-z), one digit and one special character ',
  PASSWORD_REQUIRE: 'Password is not allowed to be empty',
  PASSWORD_SHORT: 'Password length must be at least 8 characters long',
} as const;

export { UserValidationMessage };
