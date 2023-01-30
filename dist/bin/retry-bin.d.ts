import { SerializeResponseObject } from '../interfaces';
export {};
declare global {
    interface Promise<T> {
        clean(): Promise<SerializeResponseObject>;
        debugger(): Promise<T>;
        retry(ms?: number): {
            whenTimeoutError(ms?: number): Promise<SerializeResponseObject>;
            whenInternalServerError(ms?: number): Promise<SerializeResponseObject>;
            whenServiceUnavailableError(ms?: number): Promise<SerializeResponseObject>;
        };
        whenAnyError(cb: (promise: SerializeResponseObject) => any): any;
    }
}
