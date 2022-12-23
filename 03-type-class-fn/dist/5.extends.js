"use strict";
class Animal {
    move() {
        console.log('走两步');
    }
}
class Dog extends Animal {
    bark() {
        console.log('汪');
    }
}
const d = new Dog();
d.move();
d.bark();
