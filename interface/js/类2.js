"use strict";
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    Person2.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8";
    };
    return Person2;
}());
