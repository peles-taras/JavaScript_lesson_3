'use strict'

let products = ['first', 'second', 'third', 'fourth', 'fifth'];
console.log(products);
let lastElement = products.length - 1;
console.log('last element: ' + products[lastElement]);

console.log();

let styles = [' jazz', ' blues'];
console.log('array before:' + styles);
styles.push(' rock-n-roll');
console.log('array after push:' + styles);
styles.splice(-2, 1, ' classic');
console.log('array after replacement:' + styles);
console.log('removing 1st element:' + styles.shift());
styles.unshift(' rap', ' raggy');
console.log('added first 2 elements:' + styles);

console.log();

function find(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
            return 'element found under the number: '+i;
        }
    }
    return -1;
}
let customArray = ['value1', 'value2', 'value3', 'value4', 'value5'];
console.log(find(customArray, 'value5'));