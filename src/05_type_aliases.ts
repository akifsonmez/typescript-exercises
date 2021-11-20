type StringOrNum = string | number
type User = { name: string, age: number }

const saySomething = (something: StringOrNum) => {
    console.log(something)
}

const printUser = (user: User) => {
    console.log(user.name, user.age)
}

