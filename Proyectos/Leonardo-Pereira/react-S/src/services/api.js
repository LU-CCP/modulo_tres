import { create } from 'apisauce';

import apiConfig from './config';

const onRequestSuccess = config => config;

const onResponseErrorAsync = error => Promise.reject(error);

const buildApi = (config = apiConfig) => {
  const api = create(config);

  api.axiosInstance.interceptors.request.use(onRequestSuccess);
  api.axiosInstance.interceptors.response.use(res => res, onResponseErrorAsync);

  return api;
};

export default buildApi;
