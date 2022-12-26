interface Propsd {
  id: string,
  children: number[]
}

type ReadonlyProps = Readonly<Propsd>

let p3: ReadonlyProps = {
  id:'1',
  children: []
}

// p3.id = '2'   //代码会报错 