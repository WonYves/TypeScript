"use strict";
function greet(name) {
    console.log('hello' + name.toUpperCase() + '!!');
}
greet('kerwin');
// 无需类型注释
function getFavoriteNumber() {
    return 88;
}
// 无需类型注释
const names = ['lei', 'xiao', 'tian'];
names.forEach((s) => {
    console.log(s.toUpperCase());
});
