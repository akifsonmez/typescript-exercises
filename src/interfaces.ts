interface IsAnimal {
    sound(): string
    eat(food: string): void
}

let cat: IsAnimal = {
    sound() {
        return "miavv"
    },
    eat(food: string) {
        console.log("nam nam nam " + food)
    }
}

let dog: IsAnimal = {
    sound() {
        return "woof woof"
    },
    eat(food: string) {
        console.log("ham ham ham " + food)
    }
}

const soundAnimal = (animal: IsAnimal) => {
    console.log(animal.sound());
}

soundAnimal(dog)
soundAnimal(cat)