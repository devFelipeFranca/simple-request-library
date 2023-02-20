import axios, { CreateAxiosDefaults, AxiosInstance } from 'axios';

const createAxiosInstance = (configs: CreateAxiosDefaults): AxiosInstance => {
  return axios.create(configs);
};

export default createAxiosInstance;
