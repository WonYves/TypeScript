type PropsKey = 'x' | 'y' | 'z'
type Type1 = {x: number, y: number, z: number}
// y 和 z重复书写了两次
type Type2 = { [Keys in PropsKey]: number }
