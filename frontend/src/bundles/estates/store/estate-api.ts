import { type EstateResponseDto } from '~/bundles/estates/types/types.js';
import { ApiPath } from '~/bundles/common/enums/api-path.enum.js';
import { createAPI } from '~/framework/api/api.js';
import { EstateApiPath } from '../enums/estate-api-path.enum.js';

const api = createAPI(ApiPath.ESTATES);

const EstateApi = {
  async getEstates(): Promise<EstateResponseDto[]> {
    const { data } = await api.get<EstateResponseDto[]>(EstateApiPath.ROOT);
    return data;
  },
};

export { EstateApi };
