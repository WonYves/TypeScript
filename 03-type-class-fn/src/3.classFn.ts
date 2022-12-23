class Persons {
    age: number
    gender: string

    constructor(age: number, gender: string){
        this.age = age 
        this.gender = gender
    }
}

const peo1 = new Persons(20, 'kerwin')

console.log(peo1.age, peo1.gender);
