interface Typelog {
    x: number,
    y: string,
    handle(): void
}

let person1 : Typelog = {
    x: 100,
    y: 'kerwin',
    handle(){
        console.log(111)
    }
}

let person2 : Typelog = {
    x: 200,
    y: 'wiess',
    handle(){
        console.log(222)
    }
}