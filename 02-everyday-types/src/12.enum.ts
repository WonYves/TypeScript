enum Direction {
    Up = 10, 
    Down, 
    Left, 
    Right
}

function changeDirection(direction: Direction){
    console.log(direction);
}

changeDirection(Direction.Down) // 直接通过 . 访问枚举中的成员