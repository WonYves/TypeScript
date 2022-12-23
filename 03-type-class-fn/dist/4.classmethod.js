"use strict";
class Piont {
    constructor() {
        this.x = 1;
        this.y = 2;
    }
    scale(n) {
        this.x *= n;
        this.y *= n;
    }
}
const num1 = new Piont();
num1.scale(3);
console.log(num1.x, num1.y);
