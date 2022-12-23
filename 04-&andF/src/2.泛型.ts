function fn<Type>(value: Type){
  return value
}

const num = fn<number>(3)
const str = fn<string>('aaa')
const bol = fn<boolean>(true)