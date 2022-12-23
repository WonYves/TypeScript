interface IdFn<T>{
  id:(value: T) => T
  ids: () => T[]
}

let obj3: IdFn<number> = {
  id(value){
    return value
  },
  ids(){
    return [12,3,45]
  }
}