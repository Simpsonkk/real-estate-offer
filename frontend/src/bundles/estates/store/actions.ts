import { type AsyncThunkConfig } from '~/bundles/common/types/async-thunk-config.type.js';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { name as sliceName } from './slice.js';
import { EstateResponseDto } from '../types/types.js';

const loadEstates = createAsyncThunk<
  EstateResponseDto[],
  undefined,
  AsyncThunkConfig
>(`${sliceName}/getEstates`, async (_, { extra: { estateApi } }) => {
  const data = await estateApi.getEstates();
  return data;
});

export { loadEstates };
