import axios, { CreateAxiosDefaults, AxiosInstance } from 'axios';

export default function createAxiosInstance(
  configs: CreateAxiosDefaults
): AxiosInstance {
  return axios.create(configs);
}
