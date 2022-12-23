"use strict";
function fn2(value) { return value; }
let num1 = fn2(10);
// 如果用const的话 那么类型会变为值 
const num2 = fn2('str');
// const num2: "str"
