type RecordObj = Record<'a' | 'b' | 'c' , string[]>

type Obj = {
   a: string[],
   b: string[],
   c: string[],
}

// 以上两组代码效果相等

let obj4:RecordObj = {
  a: ['a'],
  b: ['b'],
  c: ['c']
} 