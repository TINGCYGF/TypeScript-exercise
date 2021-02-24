"use strict";
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.run = function () {
        return "" + this.name;
    };
    return Person;
}());
var p = new Person('TING');
alert(p.run());
