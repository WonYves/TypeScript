function getProp<T,K extends keyof T>(obj:T, key:K){
  return obj[key]
}

getProp({name: 'kerwin', age: 22}, 'name')
getProp({name: 'kerwin', age: 22}, 'age')