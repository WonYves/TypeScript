function consCoord(pt:{x:number, y:number}){
    console.log('X轴为' + pt.x);
    console.log('y轴为' + pt.y);
}

consCoord({x:4,y:6})

function printName(obj:{first:string, last?:string}){
    console.log(obj.last?.toUpperCase());
}

printName({
    first:'weiss'
})

printName({
    first:'weiss',
    last:'Wang'
})