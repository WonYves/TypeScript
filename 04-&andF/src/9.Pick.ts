interface Propsdd {
  id: string
  title: string
  children: number[]
}
type PickProps = Pick<Propsdd, 'id' | 'title'>

let p4:PickProps = {
  id: '222',
  title: 'Pick',
} 
