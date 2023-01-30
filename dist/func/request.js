"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../bin/retry-bin");
var serialize_response_1 = require("../utils/serialize-response");
var axios_1 = __importDefault(require("axios"));
var request = function (instance) {
    if (instance === void 0) { instance = axios_1.default; }
    return {
        get: function (url, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    options.headers && (instance.defaults.headers.common = options.headers);
                    return [2 /*return*/, instance
                            .get(url)
                            .then(function (res) {
                            var _a;
                            return (0, serialize_response_1.serializeResponse)(res, (_a = options === null || options === void 0 ? void 0 : options.statusCode) !== null && _a !== void 0 ? _a : 200, __assign(__assign({}, res.data), { beforeInstace: instance }));
                        })
                            .catch(function (err) {
                            var _a, _b, _c, _d, _e, _f, _g;
                            return (0, serialize_response_1.serializeResponse)(err === null || err === void 0 ? void 0 : err.response, (_a = options === null || options === void 0 ? void 0 : options.statusCode) !== null && _a !== void 0 ? _a : 200, __assign(__assign({ code: ((_b = err === null || err === void 0 ? void 0 : err.response) === null || _b === void 0 ? void 0 : _b.status) || 500, message: ((_d = (_c = err === null || err === void 0 ? void 0 : err.response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.message) || (err === null || err === void 0 ? void 0 : err.message), name: ((_f = (_e = err === null || err === void 0 ? void 0 : err.response) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.name) || (err === null || err === void 0 ? void 0 : err.name) }, (_g = err === null || err === void 0 ? void 0 : err.response) === null || _g === void 0 ? void 0 : _g.data), { debugger: err, beforeInstace: instance }));
                        })
                            .clean()];
                });
            });
        },
        post: function (url, options) {
            if (options === void 0) { options = {}; }
            options.headers && (instance.defaults.headers.common = options.headers);
            return {
                send: function (data) {
                    return instance
                        .post(url, data)
                        .then(function (res) {
                        var _a;
                        return (0, serialize_response_1.serializeResponse)(res, (_a = options === null || options === void 0 ? void 0 : options.statusCode) !== null && _a !== void 0 ? _a : 201, __assign(__assign({}, res.data), { beforeInstace: instance }));
                    })
                        .catch(function (err) {
                        var _a, _b, _c, _d, _e, _f, _g;
                        return (0, serialize_response_1.serializeResponse)(err === null || err === void 0 ? void 0 : err.response, (_a = options === null || options === void 0 ? void 0 : options.statusCode) !== null && _a !== void 0 ? _a : 201, __assign(__assign({ code: ((_b = err === null || err === void 0 ? void 0 : err.response) === null || _b === void 0 ? void 0 : _b.status) || 500, message: ((_d = (_c = err === null || err === void 0 ? void 0 : err.response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.message) || (err === null || err === void 0 ? void 0 : err.message), name: ((_f = (_e = err === null || err === void 0 ? void 0 : err.response) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.name) || (err === null || err === void 0 ? void 0 : err.name) }, (_g = err === null || err === void 0 ? void 0 : err.response) === null || _g === void 0 ? void 0 : _g.data), { debugger: err, beforeInstace: instance, bodyBackup: data }));
                    })
                        .clean();
                },
            };
        },
        put: function (url, options) {
            if (options === void 0) { options = {}; }
            options.headers && (instance.defaults.headers.common = options.headers);
            return {
                send: function (data) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, instance
                                .put(url, data)
                                .then(function (res) {
                                var _a;
                                return (0, serialize_response_1.serializeResponse)(res, (_a = options === null || options === void 0 ? void 0 : options.statusCode) !== null && _a !== void 0 ? _a : 201, __assign(__assign({}, res.data), { beforeInstace: instance }));
                            })
                                .catch(function (err) {
                                var _a, _b, _c, _d, _e, _f, _g;
                                return (0, serialize_response_1.serializeResponse)(err === null || err === void 0 ? void 0 : err.response, (_a = options === null || options === void 0 ? void 0 : options.statusCode) !== null && _a !== void 0 ? _a : 201, __assign(__assign({ code: ((_b = err === null || err === void 0 ? void 0 : err.response) === null || _b === void 0 ? void 0 : _b.status) || 500, message: ((_d = (_c = err === null || err === void 0 ? void 0 : err.response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.message) || (err === null || err === void 0 ? void 0 : err.message), name: ((_f = (_e = err === null || err === void 0 ? void 0 : err.response) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.name) || (err === null || err === void 0 ? void 0 : err.name) }, (_g = err === null || err === void 0 ? void 0 : err.response) === null || _g === void 0 ? void 0 : _g.data), { debugger: err, beforeInstace: instance, bodyBackup: data }));
                            })
                                .clean()];
                    });
                }); },
            };
        },
        patch: function (url, options) {
            if (options === void 0) { options = {}; }
            options.headers && (instance.defaults.headers.common = options.headers);
            return {
                send: function (data) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, instance
                                .patch(url, data)
                                .then(function (res) {
                                var _a;
                                return (0, serialize_response_1.serializeResponse)(res, (_a = options === null || options === void 0 ? void 0 : options.statusCode) !== null && _a !== void 0 ? _a : 201, __assign(__assign({}, res.data), { beforeInstace: instance }));
                            })
                                .catch(function (err) {
                                var _a, _b, _c, _d, _e, _f, _g;
                                return (0, serialize_response_1.serializeResponse)(err === null || err === void 0 ? void 0 : err.response, (_a = options === null || options === void 0 ? void 0 : options.statusCode) !== null && _a !== void 0 ? _a : 201, __assign(__assign({ code: ((_b = err === null || err === void 0 ? void 0 : err.response) === null || _b === void 0 ? void 0 : _b.status) || 500, message: ((_d = (_c = err === null || err === void 0 ? void 0 : err.response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.message) || (err === null || err === void 0 ? void 0 : err.message), name: ((_f = (_e = err === null || err === void 0 ? void 0 : err.response) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.name) || (err === null || err === void 0 ? void 0 : err.name) }, (_g = err === null || err === void 0 ? void 0 : err.response) === null || _g === void 0 ? void 0 : _g.data), { debugger: err, beforeInstace: instance, bodyBackup: data }));
                            })
                                .clean()];
                    });
                }); },
            };
        },
        delete: function (url, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    options.headers && (instance.defaults.headers.common = options.headers);
                    return [2 /*return*/, instance
                            .delete(url)
                            .then(function (res) {
                            var _a;
                            return (0, serialize_response_1.serializeResponse)(res, (_a = options === null || options === void 0 ? void 0 : options.statusCode) !== null && _a !== void 0 ? _a : 200, __assign(__assign({}, res.data), { beforeInstace: instance }));
                        })
                            .catch(function (err) {
                            var _a, _b, _c, _d, _e, _f, _g;
                            return (0, serialize_response_1.serializeResponse)(err === null || err === void 0 ? void 0 : err.response, (_a = options === null || options === void 0 ? void 0 : options.statusCode) !== null && _a !== void 0 ? _a : 201, __assign(__assign({ code: ((_b = err === null || err === void 0 ? void 0 : err.response) === null || _b === void 0 ? void 0 : _b.status) || 500, message: ((_d = (_c = err === null || err === void 0 ? void 0 : err.response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.message) || (err === null || err === void 0 ? void 0 : err.message), name: ((_f = (_e = err === null || err === void 0 ? void 0 : err.response) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.name) || (err === null || err === void 0 ? void 0 : err.name) }, (_g = err === null || err === void 0 ? void 0 : err.response) === null || _g === void 0 ? void 0 : _g.data), { debugger: err, beforeInstace: instance }));
                        })
                            .clean()];
                });
            });
        },
        options: function (url, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    options.headers && (instance.defaults.headers.common = options.headers);
                    return [2 /*return*/, instance
                            .options(url)
                            .then(function (res) {
                            var _a;
                            return (0, serialize_response_1.serializeResponse)(res, (_a = options === null || options === void 0 ? void 0 : options.statusCode) !== null && _a !== void 0 ? _a : 200, __assign(__assign({}, res.data), { beforeInstace: instance }));
                        })
                            .catch(function (err) {
                            var _a, _b, _c, _d, _e, _f, _g;
                            return (0, serialize_response_1.serializeResponse)(err === null || err === void 0 ? void 0 : err.response, (_a = options === null || options === void 0 ? void 0 : options.statusCode) !== null && _a !== void 0 ? _a : 200, __assign(__assign({ code: ((_b = err === null || err === void 0 ? void 0 : err.response) === null || _b === void 0 ? void 0 : _b.status) || 500, message: ((_d = (_c = err === null || err === void 0 ? void 0 : err.response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.message) || (err === null || err === void 0 ? void 0 : err.message), name: ((_f = (_e = err === null || err === void 0 ? void 0 : err.response) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.name) || (err === null || err === void 0 ? void 0 : err.name) }, (_g = err === null || err === void 0 ? void 0 : err.response) === null || _g === void 0 ? void 0 : _g.data), { debugger: err, beforeInstace: instance }));
                        })
                            .clean()];
                });
            });
        },
    };
};
exports.default = request;
