import { SerializeResponseObject } from '../interfaces';
import request from '../func/request';

const runTrack = async (
  res: Promise<SerializeResponseObject>,
  expectCode: number
) => {
  const deleteOrGetOrOptions = ['delete', 'get', 'options'];
  const resolvedPromise = await res;

  const code = resolvedPromise.code;
  const method =
    `${resolvedPromise?.data?.debugger?.request?.method}`.toLowerCase();
  const url =
    resolvedPromise?.data?.debugger?.request?._redirectable?._currentUrl;
  const body = resolvedPromise?.data?.bodyBackup;

  const _req = request(resolvedPromise?.data?.beforeInstace);

  delete resolvedPromise.data.debugger;
  delete resolvedPromise.data.beforeInstace;
  delete resolvedPromise.data.bodyBackup;

  const callback = async () => {
    return deleteOrGetOrOptions.includes(method)
      ? await (_req as any)?.[method]?.(url)
      : await (_req as any)?.[method]?.(url)?.send?.(body);
  };

  return expectCode === code
    ? (await callback()) ?? resolvedPromise
    : resolvedPromise;
};

export default runTrack;
