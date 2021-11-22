"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
    User.prototype.format = function () {
        console.log("".concat(this.name, " is ").concat(this.age, " years old ").concat(this.gender));
    };
    return User;
}());
var user1 = new User("Afife", "male", 29);
var user2 = new User("Akif", "male", 23);
user1.age = 29;
// user1.gender = "male" // gender is readonly 
// user1.name = "Afik" // name is private
var users = [];
users.push(user1);
users.push(user2);
var Person = /** @class */ (function () {
    function Person(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
    Person.prototype.format = function () {
        console.log("".concat(this.name, " is ").concat(this.age, " years old ").concat(this.gender));
    };
    return Person;
}());
var person = new Person("Akif", "male", 12);
