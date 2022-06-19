"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Todo = /** @class */ (function () {
    function Todo(title, priority, id) {
        if (id === void 0) { id = Todo.nextId; }
        this.title = title;
        this.priority = priority;
        this.id = id;
        Todo.nextId++;
    }
    Todo.prototype.toString = function () {
        return this.id + ") \uC81C\uBAA9: " + this.title + " (\uC6B0\uC120\uC21C\uC704: " + this.priority + ")";
    };
    Todo.nextId = 1;
    return Todo;
}());
exports.default = Todo;
;
