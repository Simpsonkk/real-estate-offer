import { type UserSignUpRequestDto } from '~/bundles/auth/types/types.js';

const DEFAULT_SIGN_UP_PAYLOAD: UserSignUpRequestDto = {
  email: '',
  password: '',
  fullName: '',
};

export { DEFAULT_SIGN_UP_PAYLOAD };
