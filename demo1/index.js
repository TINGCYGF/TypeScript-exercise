"use strict";
var Color;
(function (Color) {
    Color[Color["blue"] = 0] = "blue";
    Color[Color["red"] = 3] = "red";
    Color[Color["orange"] = 4] = "orange";
})(Color || (Color = {}));
;
var c = Color.red;
console.log(c); //3
var c = Color.orange;
console.log(c); //4
