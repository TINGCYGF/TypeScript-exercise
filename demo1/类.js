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
var Perso = /** @class */ (function () {
    function Perso(name) {
        this.name = name;
    }
    Perso.prototype.run = function () {
        return this.name + " \u5728\u8DD1\u6B65";
    };
    return Perso;
}());
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        return _super.call(this, name) || this;
    }
    Web.prototype.work = function () {
        console.log(this.name + " \u5728\u8DD1\u6B65");
    };
    return Web;
}(Perso));
var w = new Web('Ting');
w.run();
w.work();
