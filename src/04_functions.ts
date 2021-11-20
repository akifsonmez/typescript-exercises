let sayHello: Function

sayHello = () => { console.log("hello") }

const add = (x: number, y: number = 0): void => {
    console.log(x + y)
}

const addWithOptinal = (x: number, y: number, z?: number): void => {
    console.log(x + y)
}

add(2)
addWithOptinal(34, 122)

const subtract = (x: number, y: number): number => {
    return x - y
}