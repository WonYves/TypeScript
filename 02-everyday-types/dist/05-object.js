"use strict";
function consCoord(pt) {
    console.log('X轴为' + pt.x);
    console.log('y轴为' + pt.y);
}
consCoord({ x: 4, y: 6 });
function printName(obj) {
    var _a;
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
printName({
    first: 'weiss'
});
printName({
    first: 'weiss',
    last: 'Wang'
});
