import { SerializeResponseObject } from '../interfaces/index';
export default function abstractRetry(res: Promise<SerializeResponseObject>, ms: number): {
    whenTimeoutError: (_ms?: number) => Promise<any>;
    whenInternalServerError: (_ms?: number) => Promise<any>;
    whenServiceUnavailableError: (_ms?: number) => Promise<any>;
};
