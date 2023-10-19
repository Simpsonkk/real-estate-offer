import { type EstateResponseDto } from '~/bundles/estates/types/types.js';
import { createSlice } from '@reduxjs/toolkit';

import { DataStatus } from '~/bundles/common/enums/data-status.enum.js';
import { type ValueOf } from '~/bundles/common/types/value-of.type.js';

import { loadEstates } from './actions.js';

type State = {
  estates: EstateResponseDto[];
  dataStatus: ValueOf<typeof DataStatus>;
};

const initialState: State = {
  estates: [],
  dataStatus: DataStatus.IDLE,
};

const { actions, name, reducer } = createSlice({
  initialState,
  name: 'estates',
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadEstates.fulfilled, (state, action) => {
        state.dataStatus = DataStatus.FULFILLED;
        state.estates = action.payload;
      })
      .addCase(loadEstates.pending, (state) => {
        state.dataStatus = DataStatus.PENDING;
      })
      .addCase(loadEstates.rejected, (state) => {
        state.dataStatus = DataStatus.REJECTED;
        state.estates = initialState.estates;
      });
  },
});

export { actions, name, reducer };
export { type State };
