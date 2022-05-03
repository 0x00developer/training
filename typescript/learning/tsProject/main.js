"use strict";
console.log('Works!');
const otherString = 'Hello';
const fn = () => true;
/* DATA TYPES */
// String
let aString;
aString = 'x';
aString = "'foo'";
aString = 'bar';
aString = `${otherString}, World!`;
console.log('aString:', aString);
// Number
let aNumber = 10;
aNumber = 3.14;
aNumber = 9;
aNumber = 8;
aNumber = 0xff;
aNumber = 10 + 3.14 + 9 + 8 + 0xff;
console.log('aNumber:', aNumber);
// Boolean
let aBoolean = true;
aBoolean = false;
aBoolean = 10 > 5;
aBoolean = fn();
console.log('aBoolean:', aBoolean);
// Any
let aAny;
aAny = 'hi';
aAny = 0;
aAny = true;
aAny = () => console.log("I'm an arrow function");
console.log('aAny:', aAny);
// Array of numbers
let numberArr = [];
numberArr = [1, 2, 3];
numberArr = [3.14, 0.1, 0xaa];
console.log('numberArr:', numberArr);
// Array of strings
let stringArr;
stringArr = ['Sunday', 'Monday', 'Tuesday'];
stringArr.push('Wednesday');
console.log('stringArr:', stringArr);
// Array of booleans
let booleanArr;
booleanArr = [true, false];
console.log('booleanArr:', booleanArr);
// Array of any
let anyArr;
anyArr = ['xyz', 100, true, {}];
console.log('anyArr:', anyArr);
// Object
let objSimple = { price: 100 };
objSimple = { price: 200 };
console.log('objSimple:', objSimple);
let objLiteral;
objLiteral = { name: 'read a book', completed: false };
console.log('objLiteral:', objLiteral);
let aProduct = {
    name: 'book',
    price: 110,
    available: true,
};
console.log('aProduct:', aProduct);
const printProduct = (product) => console.log(product);
printProduct(aProduct);
const printIsAvalidProduct = (product) => {
    let res = null;
    product.name && product.price && product.available
        ? (res = true)
        : (res = false);
    return res;
};
let result = printIsAvalidProduct(aProduct);
console.log('result:', result);
result = printIsAvalidProduct(aString);
console.log('result:', result);
