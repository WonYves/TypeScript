function greet(name:string){
    console.log('hello' + name.toUpperCase() + '!!')
}

greet('kerwin') 

// 无需类型注释
function getFavoriteNumber():number{
    return 88
}

// 无需类型注释
const names = ['lei','xiao','tian']
names.forEach((s) => {
    console.log(s.toUpperCase());
})