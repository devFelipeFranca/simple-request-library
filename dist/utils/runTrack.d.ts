import { SerializeResponseObject } from '../interfaces';
declare const runTrack: (res: Promise<SerializeResponseObject>, expectCode: number) => Promise<any>;
export default runTrack;
