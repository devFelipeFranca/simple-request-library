import '../bin/retry-bin';
import { serializeResponse } from '../utils/serialize-response';
import axios from 'axios';
import { Request } from '../@types';
import { Options } from '../interfaces';

const request: Request = (instance = axios) => {
  return {
    get: async (url, options = {} as Options) => {
      options.headers && (instance.defaults.headers.common = options.headers);
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
    post: (url, options = {} as Options) => {
      options.headers && (instance.defaults.headers.common = options.headers);
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
    put: (url, options = {} as Options) => {
      options.headers && (instance.defaults.headers.common = options.headers);
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
    patch: (url, options = {} as Options) => {
      options.headers && (instance.defaults.headers.common = options.headers);
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
    delete: async (url, options = {} as Options) => {
      options.headers && (instance.defaults.headers.common = options.headers);
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
    options: async (url, options = {} as Options) => {
      options.headers && (instance.defaults.headers.common = options.headers);
      return instance
        .options(url)
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
  };
};

export default request;
