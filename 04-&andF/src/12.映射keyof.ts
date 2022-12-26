type Propskeyof = { a:number, b:string, c:boolean }
type Type4 = { [key in keyof Propskeyof]: number }

// 首先执行keyof Props 获取到对象类型Props所有键 即 'a'|'b'|'c'
// 然后 Key in 就表示key可以是Props 中所有键的任意一个
