"use strict";
const addName = (obj) => {
    return Object.assign(Object.assign({}, obj), { name: "akif" });
};
const result = addName({ age: 25 });
console.log(result.age, result.name);
const stringNode = {
    data: "asd",
};
const numberNode = {
    data: 23
};
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
})(Gender || (Gender = {}));
console.log(Gender.FEMALE, Gender.MALE);
