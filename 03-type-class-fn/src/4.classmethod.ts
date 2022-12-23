class Piont{
    x=1
    y=2

    scale(n:number):void{
        this.x *=n
        this.y *=n
    }
}

const num1 = new Piont()
num1.scale(3)
console.log(num1.x, num1.y);
