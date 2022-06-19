"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        while (_) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandNewTodo = exports.CommandPrintTodos = exports.Command = void 0;
var Type_1 = require("./Type");
var Input_1 = require("./Input");
var util_1 = require("./util");
var Command = /** @class */ (function () {
    function Command(key, desc) {
        this.key = key;
        this.desc = desc;
    }
    Command.prototype.toString = function () {
        return this.key + ": " + this.desc;
    };
    return Command;
}());
exports.Command = Command;
var CommandPrintTodos = /** @class */ (function (_super) {
    __extends(CommandPrintTodos, _super);
    function CommandPrintTodos() {
        return _super.call(this, 'p', '모든 할 일 출력하기') || this;
    }
    CommandPrintTodos.prototype.run = function (state) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, todo, text;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        for (_i = 0, _a = state.todos; _i < _a.length; _i++) {
                            todo = _a[_i];
                            text = todo.toString();
                            console.log(text);
                        }
                        return [4 /*yield*/, Input_1.waitForInput("press any key: ")];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return CommandPrintTodos;
}(Command));
exports.CommandPrintTodos = CommandPrintTodos;
var CommandNewTodo = /** @class */ (function (_super) {
    __extends(CommandNewTodo, _super);
    function CommandNewTodo() {
        return _super.call(this, 'n', '할 일 추가하기') || this;
    }
    CommandNewTodo.prototype.run = function (state) {
        return __awaiter(this, void 0, void 0, function () {
            var title, priorityStr, priority;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Input_1.waitForInput("title: ")];
                    case 1:
                        title = _a.sent();
                        return [4 /*yield*/, Input_1.waitForInput("priority: ")];
                    case 2:
                        priorityStr = _a.sent();
                        priority = Number(priorityStr);
                        return [2 /*return*/];
                }
            });
        });
    };
    CommandNewTodo.getIsPriority = function (priority) {
        return util_1.getIsValidEnumValue(Type_1.Priority, priority);
    };
    return CommandNewTodo;
}(Command));
exports.CommandNewTodo = CommandNewTodo;
var Test = /** @class */ (function () {
    function Test() {
    }
    return Test;
}());
