import { SerializeResponseObject } from '../interfaces/index';
import runTrack from './run-track';
import mapperHttpErros from '../errors/mapper-http-erros';
import sleep from './sleep';

export default function abstractRetry(
  res: Promise<SerializeResponseObject>,
  ms: number
) {
  return {
    whenTimeoutError: async (_ms?: number) => {
      await sleep(_ms ?? ms);
      return await runTrack(res, mapperHttpErros.TIMEOUT);
    },

    whenInternalServerError: async (_ms?: number) => {
      await sleep(_ms ?? ms);
      return await runTrack(res, mapperHttpErros.INTERNAL_SERVER_ERROR);
    },

    whenServiceUnavailableError: async (_ms?: number) => {
      await sleep(_ms ?? ms);
      return await runTrack(res, mapperHttpErros.SERVICE_UNAVAILABLE);
    },
  };
}
