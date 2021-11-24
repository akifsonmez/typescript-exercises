"use strict";
let sayHello;
sayHello = () => { console.log("hello"); };
const add = (x, y = 0) => {
    console.log(x + y);
};
const addWithOptinal = (x, y, z) => {
    console.log(x + y);
};
add(2);
addWithOptinal(34, 122);
const subtract = (x, y) => {
    return x - y;
};
