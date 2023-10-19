import {
  type UserSignInRequestDto,
  type UserSignInResponseDto,
  type UserSignUpRequestDto,
  type UserSignUpResponseDto,
} from '~/bundles/auth/types/types.js';
import { ApiPath } from '~/bundles/common/enums/api-path.enum.js';
import { createAPI } from '~/framework/api/api.js';

import { AuthApiPath } from '../enums/auth-api-path.enum.js';

const api = createAPI(ApiPath.AUTH);

const AuthApi = {
  async signIn(user: UserSignInRequestDto): Promise<UserSignInResponseDto> {
    const { data } = await api.post<UserSignInResponseDto>(
      AuthApiPath.SIGN_IN,
      user,
    );
    return data;
  },

  async signUp(user: UserSignUpRequestDto): Promise<UserSignUpResponseDto> {
    const { data } = await api.post<UserSignUpResponseDto>(
      AuthApiPath.SIGN_UP,
      user,
    );
    return data;
  },

  async loadUser(): Promise<UserSignInResponseDto> {
    const { data } = await api.get<UserSignInResponseDto>(
      AuthApiPath.CURRENT_USER,
    );
    return data;
  },
};

export { AuthApi };
