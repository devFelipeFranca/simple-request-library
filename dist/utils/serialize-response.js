"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeResponse = void 0;
var serializeResponse = function (res, successCode, data) {
    return {
        success: (res === null || res === void 0 ? void 0 : res['status']) === successCode,
        code: res === null || res === void 0 ? void 0 : res['status'],
        description: res === null || res === void 0 ? void 0 : res['statusText'],
        headers: (res === null || res === void 0 ? void 0 : res['status']) === successCode ? res === null || res === void 0 ? void 0 : res['headers'] : null,
        data: data,
    };
};
exports.serializeResponse = serializeResponse;
