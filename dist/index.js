"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAxiosInstance = exports.request = void 0;
var request_1 = require("./func/request");
Object.defineProperty(exports, "request", { enumerable: true, get: function () { return __importDefault(request_1).default; } });
var createAxiosInstance_1 = require("./func/createAxiosInstance");
Object.defineProperty(exports, "createAxiosInstance", { enumerable: true, get: function () { return __importDefault(createAxiosInstance_1).default; } });
