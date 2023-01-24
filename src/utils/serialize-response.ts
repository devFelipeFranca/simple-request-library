import { SerializeResponse } from '../@types';

export const serializeResponse: SerializeResponse = (
  res,
  successCode,
  data
) => {
  return {
    success: res?.['status'] === successCode,
    code: res?.['status'],
    description: res?.['statusText'],
    headers: res?.['status'] === successCode ? res?.['headers'] : null,
    data: data,
  };
};
