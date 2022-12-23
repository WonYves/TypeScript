// function id<Type>(value: Type[]):Type[]{
//   console.log(value.length)   
//   return value 
// } 

interface ILength { length : number }
function id<Type extends ILength>(value: Type ): Type {
  console.log(value.length)
  return value
}

id([1,2,3,4])