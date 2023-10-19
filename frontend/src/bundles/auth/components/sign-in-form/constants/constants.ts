import { type UserSignInRequestDto } from '~/bundles/auth/types/types.js';

const DEFAULT_SIGN_IN_PAYLOAD: UserSignInRequestDto = {
  email: '',
  password: '',
};

export { DEFAULT_SIGN_IN_PAYLOAD };
