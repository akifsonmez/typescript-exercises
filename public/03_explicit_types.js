"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// explicit types
var age;
age = 234;
// age = "as" should be number
var myName;
myName = "Akif";
// arrays
var numbers = []; // it should be initialized
numbers.push(12);
// union
var oddNumbers = [];
oddNumbers.push("1");
oddNumbers.push(3);
var evenNumber;
evenNumber = 12;
evenNumber = "12";
//objects
var user;
user = [];
user = { userName: "Akif" };
var car;
car = { brand: "Tesla", year: 2012, model: "XY--2021" };
// any
var x;
x = 5;
x = false;
x = "1";
var mixedArray = [];
mixedArray.push(2);
mixedArray.push("qw");
mixedArray.push(false);
