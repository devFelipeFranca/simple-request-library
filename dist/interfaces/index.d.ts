export interface SerializeResponseObject {
    success: boolean;
    code: number;
    description: string;
    headers: any;
    data: any;
}
export interface Options {
    successCode: number;
    headers: {
        [key: string]: any;
    };
    [x: PropertyKey]: any;
}
