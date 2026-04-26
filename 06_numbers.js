let a = 10;
let b = 345.64875;
console.log(b.toFixed(1)); // number will show upto 1 decimal values.
console.log(b.toPrecision(5)); // number will show upto 5 digits.

console.log(typeof b.toFixed(1));//string
let m = new Number(30);
console.log(typeof m); //object
let n = new Number(30);
console.log(m==n);//false -> while m and n both are object but pointing different object
// object will be same if both are pointing same object.
let n2 = n;
console.log(n==n);//true
