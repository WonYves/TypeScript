"use strict";
function printId(id) {
    // console.log(id.toUpperCase());
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
printId(12);
printId('12');
printId(false);
