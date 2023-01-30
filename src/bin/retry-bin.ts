import { SerializeResponseObject } from '../interfaces';
import abstractRetry from '../utils/abstractRetry';

export {};

declare global {
  interface Promise<T> {
    clean(): Promise<SerializeResponseObject>;
    debugger(): Promise<T>;
    retry(ms?: number): {
      whenTimeoutError(ms?: number): Promise<SerializeResponseObject>;
      whenInternalServerError(ms?: number): Promise<SerializeResponseObject>;
      whenServiceUnavailableError(
        ms?: number
      ): Promise<SerializeResponseObject>;
    };
    whenAnyError(cb: (promise: SerializeResponseObject) => any): any;
  }
}

if (!Promise.prototype.debugger) {
  Promise.prototype.debugger = async function (): Promise<void> {
    const randomId = Math.random().toString();
    console.time(`debugger id: ${randomId}`);
    console.debug(await this);
    console.timeEnd(`debugger id: ${randomId}`);
    return this;
  };
}

if (!Promise.prototype.clean) {
  Promise.prototype.clean =
    async function (): Promise<SerializeResponseObject> {
      const resolvedPromise = await this;

      delete resolvedPromise.data.debugger;
      delete resolvedPromise.data.beforeInstace;
      delete resolvedPromise.data.bodyBackup;

      return resolvedPromise;
    };
}

if (!Promise.prototype.retry) {
  Promise.prototype.retry = function (ms: number = 1000 /* 1 second */) {
    return {
      ...abstractRetry(this, ms),
    };
  };
}

if (!Promise.prototype.whenAnyError) {
  Promise.prototype.whenAnyError = async function (callback) {
    const resolvedPromise = await this.clean();
    return resolvedPromise.success
      ? resolvedPromise
      : callback(resolvedPromise);
  };
}
