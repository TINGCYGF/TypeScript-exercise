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
var Programmer = /** @class */ (function () {
    function Programmer(name) {
        this.name = name;
    }
    Programmer.prototype.coding = function (code) {
        console.log(this.name + code);
    };
    return Programmer;
}());
var Webs = /** @class */ (function (_super) {
    __extends(Webs, _super);
    function Webs(name) {
        return _super.call(this, name) || this;
    }
    Webs.prototype.eats = function () {
        console.log(this.name + '喜欢吃馒头');
    };
    Webs.prototype.work = function () {
        console.log(this.name + '写代码');
    };
    return Webs;
}(Programmer));
var ww = new Webs('小李');
// w.eat();
ww.coding('写ts代码');
