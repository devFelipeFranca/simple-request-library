import { SerializeResponseObject, Options } from '../interfaces';
import { AxiosResponse, AxiosInstance } from 'axios';
export type SerializeResponse = {
    (res: AxiosResponse, successCode: number, data: any): SerializeResponseObject;
};
export type RequestMethods = {
    get: (url: string, options?: Options) => Promise<SerializeResponseObject>;
    post: (url: string, options?: Options) => {
        send: (data: any) => Promise<SerializeResponseObject>;
    };
    put: (url: string, options?: Options) => {
        send: (data: any) => Promise<SerializeResponseObject>;
    };
    patch: (url: string, options?: Options) => {
        send: (data: any) => Promise<SerializeResponseObject>;
    };
    delete: (url: string, options?: Options) => Promise<SerializeResponseObject>;
};
export type Request = {
    (instance?: AxiosInstance): RequestMethods;
};
