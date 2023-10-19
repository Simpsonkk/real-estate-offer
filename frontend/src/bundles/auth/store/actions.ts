import { createAsyncThunk } from '@reduxjs/toolkit';

import { type AsyncThunkConfig } from '~/bundles/common/types/async-thunk-config.type.js';
import { tokenService } from '~/services/services.js';

import { AuthApiPath } from '../enums/enums.js';
import {
  type UserSignInRequestDto,
  type UserSignInResponseDto,
  type UserSignUpResponseDto,
  type UserSignUpRequestDto,
} from '../types/types.js';
import { name as sliceName } from './slice.js';

const signIn = createAsyncThunk<
  UserSignInResponseDto,
  UserSignInRequestDto,
  AsyncThunkConfig
>(
  `${sliceName}${AuthApiPath.SIGN_IN}`,
  async (loginPayload, { extra: { authApi } }) => {
    const data = await authApi.signIn(loginPayload);
    tokenService.saveToken(data.token);
    return data;
  },
);
const loadUser = createAsyncThunk<
  UserSignInResponseDto,
  undefined,
  AsyncThunkConfig
>(`${sliceName}${AuthApiPath.SIGN_IN}`, async (_, { extra: { authApi } }) => {
  const data = await authApi.loadUser();
  return data;
});

const signUp = createAsyncThunk<
  UserSignUpResponseDto,
  UserSignUpRequestDto,
  AsyncThunkConfig
>(
  `${sliceName}${AuthApiPath.SIGN_UP}`,
  async (signUpPayload, { extra: { authApi } }) => {
    const data = await authApi.signUp(signUpPayload);
    tokenService.saveToken(data.token);
    return data;
  },
);

const signOut = createAsyncThunk<unknown, undefined, AsyncThunkConfig>(
  `${sliceName}${'/sign-out'}`,
  async () => {
    void tokenService.removeToken();
  },
);

export { signIn, signOut, loadUser, signUp };
