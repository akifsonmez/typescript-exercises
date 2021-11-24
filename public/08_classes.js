class User {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
    format() {
        console.log(`${this.name} is ${this.age} years old ${this.gender}`);
    }
}
const user1 = new User("Afife", "male", 29);
const user2 = new User("Akif", "male", 23);
user1.age = 29;
// user1.gender = "male" // gender is readonly 
// user1.name = "Afik" // name is private
const users = [];
users.push(user1);
users.push(user2);
class Person {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
    format() {
        console.log(`${this.name} is ${this.age} years old ${this.gender}`);
    }
}
const person = new Person("Akif", "male", 12);
export {};
