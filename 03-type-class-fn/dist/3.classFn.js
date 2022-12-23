"use strict";
class Persons {
    constructor(age, gender) {
        this.age = age;
        this.gender = gender;
    }
}
const peo1 = new Persons(20, 'kerwin');
console.log(peo1.age, peo1.gender);
