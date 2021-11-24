"use strict";
let cat = {
    sound() {
        return "miavv";
    },
    eat(food) {
        console.log("nam nam nam " + food);
    }
};
let dog = {
    sound() {
        return "woof woof";
    },
    eat(food) {
        console.log("ham ham ham " + food);
    }
};
const soundAnimal = (animal) => {
    console.log(animal.sound());
};
soundAnimal(dog);
soundAnimal(cat);
