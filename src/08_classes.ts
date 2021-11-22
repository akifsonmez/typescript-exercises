class User {
    private name: string // 
    readonly gender: string
    public age: number

    constructor(name: string, gender: string, age: number) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }

    format() {
        console.log(`${this.name} is ${this.age} years old ${this.gender}`)
    }
}
const user1: User = new User("Afife", "male", 29)
const user2: User = new User("Akif", "male", 23)
user1.age = 29
// user1.gender = "male" // gender is readonly 
// user1.name = "Afik" // name is private

const users: User[] = [];
users.push(user1)
users.push(user2)

class Person {
    constructor(private name: string, readonly gender: string, public age: number) { }

    format() {
        console.log(`${this.name} is ${this.age} years old ${this.gender}`)
    }
}

const person: Person = new Person("Akif", "male", 12)

export { }