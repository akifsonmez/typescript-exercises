"use strict";
exports.__esModule = true;
var numbers = [12, 1, 3, 4, 56, 89];
//numbers.push("123") should be number
var mixed = ["abc", 432];
//mixed.push(false) should be string or number
mixed.push("bvd");
var user = {
    name: "Akif",
    age: 25,
    gender: "male"
};
// user.age = "23" should be number
// user.surname = "Sonmez" new properties cannot be added
user = {
    name: "name",
    age: 12,
    gender: "male"
};
