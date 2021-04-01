"use strict";
var Person3 = /** @class */ (function () {
    function Person3(name) {
        this.name = name;
    }
    Person3.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8";
    };
    Person3.print = function () {
        console.log('静态方法' + Person3.age); //可以调用静态属性
    };
    Person3.age = 20;
    return Person3;
}());
Person3.print(); //调用静态方法
console.log(Person3.age);
