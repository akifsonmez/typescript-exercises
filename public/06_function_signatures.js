"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// example 1
var sayMyName;
sayMyName = function (myName) {
    console.log("Hello ".concat(myName));
};
sayMyName("Akif");
// example 2
var calculate;
calculate = function (num1, num2, add) {
    return add ? num1 + num2 : num1 - num2;
};
console.log(calculate(6, 2, true));
var logDetail;
logDetail = function (user) {
    console.log(user.username, user.age);
};
logDetail({ username: "Akif", age: 24 });
