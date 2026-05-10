let x = 20;
let y = 30;

console.log("x and y is same:" + (x==y));

console.log("typeof x and y are same:" + (x===y));

//number and string comparision(string converts in number)
let a = '10';
let b = 10;
console.log(a==b);//true
console.log(a===b);//type check and value, if type and value both same then true

let num1 = 20;
let num2 = 20;

console.log(num1==num2);//true
console.log(num1===num2);//true

let f1 = 0.1
let f2 = 0.2

let sum = f1 + f2;
console.log(sum == 0.3);//false
console.log(sum);//0.3000000000000004

console.log(null==0);//false
console.log(null==undefined);//true
console.log(null=="");//false
console.log(null>="");//true
