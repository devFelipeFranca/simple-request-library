import '../bin/retry-bin';
import { serializeResponse } from '../utils/serialize-response';
import axios from 'axios';
import { Request } from '../@types';

const request: Request = (instance = axios) => {
  return {
    get: async (url, options) => {
      return instance
        .get(url)
        .then((res) =>
          serializeResponse(res, options?.statusCode ?? 200, {
            ...res.data,
            beforeInstace: instance,
          })
        )
        .catch((err: any) =>
          serializeResponse(err?.response, options?.statusCode ?? 200, {
            code: err?.response?.status || 500,
            message: err?.response?.data?.message || err?.message,
            name: err?.response?.data?.name || err?.name,
            ...err?.response?.data,
            debugger: err,
            beforeInstace: instance,
          })
        )
        .clean();
    },
    post: (url, options) => {
      return {
        send: (data) => {
          return instance
            .post(url, data)
            .then((res) =>
              serializeResponse(res, options?.statusCode ?? 201, {
                ...res.data,
                beforeInstace: instance,
              })
            )
            .catch((err: any) =>
              serializeResponse(err?.response, options?.statusCode ?? 201, {
                code: err?.response?.status || 500,
                message: err?.response?.data?.message || err?.message,
                name: err?.response?.data?.name || err?.name,
                ...err?.response?.data,
                debugger: err,
                beforeInstace: instance,
                bodyBackup: data,
              })
            )
            .clean();
        },
      };
    },
    put: (url, options) => {
      return {
        send: async (data) => {
          return instance
            .put(url, data)
            .then((res) =>
              serializeResponse(res, options?.statusCode ?? 201, {
                ...res.data,
                beforeInstace: instance,
              })
            )
            .catch((err: any) =>
              serializeResponse(err?.response, options?.statusCode ?? 201, {
                code: err?.response?.status || 500,
                message: err?.response?.data?.message || err?.message,
                name: err?.response?.data?.name || err?.name,
                ...err?.response?.data,
                debugger: err,
                beforeInstace: instance,
                bodyBackup: data,
              })
            )
            .clean();
        },
      };
    },
    patch: (url, options) => {
      return {
        send: async (data) => {
          return instance
            .patch(url, data)
            .then((res) =>
              serializeResponse(res, options?.statusCode ?? 201, {
                ...res.data,
                beforeInstace: instance,
              })
            )
            .catch((err: any) =>
              serializeResponse(err?.response, options?.statusCode ?? 201, {
                code: err?.response?.status || 500,
                message: err?.response?.data?.message || err?.message,
                name: err?.response?.data?.name || err?.name,
                ...err?.response?.data,
                debugger: err,
                beforeInstace: instance,
                bodyBackup: data,
              })
            )
            .clean();
        },
      };
    },
    delete: async (url, options) => {
      return instance
        .delete(url)
        .then((res) =>
          serializeResponse(res, options?.statusCode ?? 200, {
            ...res.data,
            beforeInstace: instance,
          })
        )
        .catch((err: any) =>
          serializeResponse(err?.response, options?.statusCode ?? 201, {
            code: err?.response?.status || 500,
            message: err?.response?.data?.message || err?.message,
            name: err?.response?.data?.name || err?.name,
            ...err?.response?.data,
            debugger: err,
            beforeInstace: instance,
          })
        )
        .clean();
    },
  };
};

export default request;
