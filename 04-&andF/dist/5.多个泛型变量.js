"use strict";
function getProp(obj, key) {
    return obj[key];
}
getProp({ name: 'kerwin', age: 22 }, 'name');
getProp({ name: 'kerwin', age: 22 }, 'age');
