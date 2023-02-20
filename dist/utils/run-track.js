"use strict";
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
var request_1 = __importDefault(require("../func/request"));
var runTrack = function (res, expectCode) { return __awaiter(void 0, void 0, void 0, function () {
    var deleteOrGetOrOptions, resolvedPromise, code, method, url, body, _req, callback, _a;
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0:
                deleteOrGetOrOptions = ['delete', 'get', 'options'];
                return [4 /*yield*/, res];
            case 1:
                resolvedPromise = _m.sent();
                code = resolvedPromise.code;
                method = "".concat((_d = (_c = (_b = resolvedPromise === null || resolvedPromise === void 0 ? void 0 : resolvedPromise.data) === null || _b === void 0 ? void 0 : _b.debugger) === null || _c === void 0 ? void 0 : _c.request) === null || _d === void 0 ? void 0 : _d.method).toLowerCase();
                url = (_h = (_g = (_f = (_e = resolvedPromise === null || resolvedPromise === void 0 ? void 0 : resolvedPromise.data) === null || _e === void 0 ? void 0 : _e.debugger) === null || _f === void 0 ? void 0 : _f.request) === null || _g === void 0 ? void 0 : _g._redirectable) === null || _h === void 0 ? void 0 : _h._currentUrl;
                body = (_j = resolvedPromise === null || resolvedPromise === void 0 ? void 0 : resolvedPromise.data) === null || _j === void 0 ? void 0 : _j.bodyBackup;
                _req = (0, request_1.default)((_k = resolvedPromise === null || resolvedPromise === void 0 ? void 0 : resolvedPromise.data) === null || _k === void 0 ? void 0 : _k.beforeInstace);
                delete resolvedPromise.data.debugger;
                delete resolvedPromise.data.beforeInstace;
                delete resolvedPromise.data.bodyBackup;
                callback = function () { return __awaiter(void 0, void 0, void 0, function () {
                    var _a;
                    var _b, _c, _d, _e;
                    return __generator(this, function (_f) {
                        switch (_f.label) {
                            case 0:
                                if (!deleteOrGetOrOptions.includes(method)) return [3 /*break*/, 2];
                                return [4 /*yield*/, ((_b = _req === null || _req === void 0 ? void 0 : _req[method]) === null || _b === void 0 ? void 0 : _b.call(_req, url))];
                            case 1:
                                _a = _f.sent();
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, ((_e = (_d = (_c = _req === null || _req === void 0 ? void 0 : _req[method]) === null || _c === void 0 ? void 0 : _c.call(_req, url)) === null || _d === void 0 ? void 0 : _d.send) === null || _e === void 0 ? void 0 : _e.call(_d, body))];
                            case 3:
                                _a = _f.sent();
                                _f.label = 4;
                            case 4: return [2 /*return*/, _a];
                        }
                    });
                }); };
                if (!(expectCode === code)) return [3 /*break*/, 3];
                return [4 /*yield*/, callback()];
            case 2:
                _a = (_l = (_m.sent())) !== null && _l !== void 0 ? _l : resolvedPromise;
                return [3 /*break*/, 4];
            case 3:
                _a = resolvedPromise;
                _m.label = 4;
            case 4: return [2 /*return*/, _a];
        }
    });
}); };
exports.default = runTrack;
