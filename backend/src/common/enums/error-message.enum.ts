const ErrorMessage = {
  NOT_AUTHORIZED: 'You are not authorized to access this route.',
  USER_ALREADY_EXIST: 'User already exist.',
  INCORRECT_EMAIL: 'Incorrect email.',
  EMAIL_ALREADY_EXISTS: 'Email is already taken.',
  PASSWORDS_NOT_MATCH: 'Passwords do not match.',
  INVALID_TOKEN: 'Invalid token.',
  UNAUTHORIZED_USER: 'User not authorized.',
  USER_NOT_FOUND: 'No user found for provided credentials.',
  TOKEN_INVALID_OR_EXPIRED: 'token invalid or expired.',
} as const;

export { ErrorMessage };
