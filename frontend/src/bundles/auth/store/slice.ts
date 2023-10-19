import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { DataStatus } from '~/bundles/common/enums/data-status.enum.js';
import { type ValueOf } from '~/bundles/common/types/value-of.type.js';
import { tokenService } from '~/services/services.js';

import { type UserSignInResponseDto } from '../types/types.js';
import { signIn, loadUser, signOut, signUp } from './actions.js';

type State = {
  currentUser: UserSignInResponseDto | null;
  dataStatus: ValueOf<typeof DataStatus>;
};

const initialState: State = {
  currentUser: null,
  dataStatus: DataStatus.IDLE,
};

const { actions, name, reducer } = createSlice({
  initialState,
  name: 'auth',
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(signOut.fulfilled, (state) => {
        state.currentUser = initialState.currentUser;
      })
      .addMatcher(
        isAnyOf(signUp.pending, loadUser.pending, signIn.pending),
        (state) => {
          state.dataStatus = DataStatus.PENDING;
        },
      )
      .addMatcher(
        isAnyOf(signUp.rejected, loadUser.rejected, signIn.rejected),
        (state) => {
          state.dataStatus = DataStatus.REJECTED;
          state.currentUser = initialState.currentUser;
          void tokenService.removeToken();
        },
      )
      .addMatcher(
        isAnyOf(signUp.fulfilled, loadUser.fulfilled, signIn.fulfilled),
        (state, action) => {
          state.dataStatus = DataStatus.FULFILLED;
          state.currentUser = action.payload;
        },
      );
  },
});

export { actions, name, reducer };
export { type State };
