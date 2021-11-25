const addName = <T>(obj: T) => {
    return { ...obj, name: "akif" }
}

const result = addName({ age: 25 })

console.log(result.age, result.name)


interface ListNode<T> {
    data: T
}

const stringNode: ListNode<string> = {
    data: "asd",
}

const numberNode: ListNode<number> = {
    data: 23
}


enum Gender { MALE, FEMALE }

console.log(Gender.FEMALE, Gender.MALE)