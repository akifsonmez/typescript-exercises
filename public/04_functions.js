"use strict";
var sayHello;
sayHello = function () { console.log("hello"); };
var add = function (x, y) {
    if (y === void 0) { y = 0; }
    console.log(x + y);
};
var addWithOptinal = function (x, y, z) {
    console.log(x + y);
};
add(2);
addWithOptinal(34, 122);
var subtract = function (x, y) {
    return x - y;
};
