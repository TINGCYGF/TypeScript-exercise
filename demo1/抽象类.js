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
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.run = function () {
        console.log('该方法可以不实现');
    };
    return Animal;
}());
// var a=new Animal() /*错误的写法*/
var Dogs = /** @class */ (function (_super) {
    __extends(Dogs, _super);
    //抽象类的子类必须实现抽象类里面的抽象方法
    function Dogs(name) {
        return _super.call(this, name) || this;
    }
    Dogs.prototype.eat = function () {
        console.log(this.name + '吃粮食');
    };
    return Dogs;
}(Animal));
var dd = new Dogs('小花花');
dd.eat();
var Cats = /** @class */ (function (_super) {
    __extends(Cats, _super);
    //抽象类的子类必须实现抽象类里面的抽象方法
    function Cats(name) {
        return _super.call(this, name) || this;
    }
    Cats.prototype.run = function () { };
    Cats.prototype.eat = function () {
        console.log(this.name + '吃老鼠');
    };
    return Cats;
}(Animal));
var cc = new Cats('小花猫');
cc.eat();
