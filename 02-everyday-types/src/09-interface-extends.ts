interface Person1 {
    name: string,
    age: number,
    isBoy: boolean,
}

interface Person2 extends Person1 {
    brithday: Date
}

let people: Person2 = {
    name: 'lijint',
    age: 18,
    isBoy: true,
    brithday: new Date()
}
console.log(people);


