'use strict'

function filterRange(array, a, b) {
    console.log(array.slice(a, b));
}
let someArray = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]
filterRange(someArray, 1, 5);

console.log();

let shortString = 'my-short-string'
console.log('before: ' + shortString)

function camelize(str) {
    let splittedArray = str.split('-s')
    let joinedArray = splittedArray.join('S');
    return joinedArray;
}
console.log('after transforming: ' + camelize(shortString));


