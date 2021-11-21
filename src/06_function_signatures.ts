// example 1
let sayMyName: (x: string) => void

sayMyName = (myName: string) => {
    console.log(`Hello ${myName}`)
}

sayMyName("Akif")

// example 2
let calculate: (x: number, y: number, z: boolean) => number

calculate = (num1: number, num2: number, add: boolean) => {
    return add ? num1 + num2 : num1 - num2
}

console.log(calculate(6, 2, true))


// example 3
type User = { username: string, age: number }

let logDetail: (x: User) => void

logDetail = (user: User) => {
    console.log(user.username, user.age)
}

logDetail({username:"Akif", age:24})


export { }