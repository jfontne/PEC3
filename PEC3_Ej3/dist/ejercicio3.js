"use strict";
//Sustituye /***/ por las instrucciones adecuadas que cumplan las operaciones 
//y salidas indicadas en los comentarios.
class Animal {
    constructor() {
        /***/
    }
}
Animal.population = 0;
class Dog extends Animal {
    /***/
    iamadog() {
        console.log('yes, this is a dog');
    }
}
class Cat extends Animal {
    constructor(gender) {
        super(gender) = gender;
    }
    iamacat() {
        console.log('yes, this is a cat');
    }
}
let animals = [];
animals.push(new Cat('male'));
animals.push(new Dog('white'));
animals.push(new Cat('female'));
animals.push(new Dog('black'));
for (let animal of animals) {
    /***/
}
/**  loop prints these lines
MEOW
yes, this is a cat
WOW
yes, this is a dog
MEOW
yes, this is a cat
WOW
yes, this is a dog
*/
console.log(Animal.population); //4
