import axios, {
  type AxiosInstance,
  type InternalAxiosRequestConfig,
} from 'axios';

import { tokenService } from '~/services/services.js';

import { config } from '../config/config.js';

const BASE_URL = config.ENV.API.ORIGIN_URL;

const createAPI = (url: string): AxiosInstance => {
  const api = axios.create({
    baseURL: `${BASE_URL}${url}`,
  });

  api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = tokenService.getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message);
      }
      throw new Error(error.message);
    },
  );

  return api;
};

export { createAPI };
