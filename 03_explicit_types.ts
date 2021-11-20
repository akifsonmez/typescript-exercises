// explicit types
let age: number
age = 234
// age = "as" should be number

let myName: string
myName = "Akif"

// arrays
let numbers: number[] = [] // it should be initialized
numbers.push(12)

// union

let oddNumbers: (number | string)[] = []
oddNumbers.push("1")
oddNumbers.push(3)

let evenNumber: string | number
evenNumber = 12
evenNumber = "12"

//objects
let user: object
user = []
user = { userName: "Akif" }


let car: {
    brand: string
    year: number
    model: string
}

car = { brand: "Tesla", year: 2012, model: "XY--2021" }

export { }