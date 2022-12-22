"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 10] = "Up";
    Direction[Direction["Down"] = 11] = "Down";
    Direction[Direction["Left"] = 12] = "Left";
    Direction[Direction["Right"] = 13] = "Right";
})(Direction || (Direction = {}));
function changeDirection(direction) {
    console.log(direction);
}
changeDirection(Direction.Down); // 直接通过 . 访问枚举中的成员
