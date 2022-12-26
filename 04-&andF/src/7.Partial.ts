interface Props {
  id: string,
  children: number
}

type PartialProps = Partial<Props>

let p1: Props = {
  id: '1',
  children: 2
}
// 两个都要加

let p2: PartialProps = {
  
}
// 可以都不加