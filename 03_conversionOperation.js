let score = "35abc"

console.log(typeof score); //string
console.log(typeof(score));// string

let valueInNumber = Number(score)
console.log(valueInNumber);//NaN
console.log(typeof valueInNumber);//number

/*
if score = 
"33" => 33
"33abc" => NaN
"null" => 0
true => 1, false => 0
undefined => NaN

*/

let isLogedIn = 1

let booleanIsLoggedIn = Boolean(isLogedIn)
console.log(booleanIsLoggedIn);

// 1 => true
// "name" => true
// "" => false



let number = 21
let stringNumber = String(number)
console.log(stringNumber)
console.log(typeof stringNumber);

// ************************* Operations *********************

let value = 2
let negValue = -value;
console.log(negValue);

let str1 = "hello"
let str2 = " world"

let str3 = str1 + str2;
console.log(str3)

console.log(1 + 1 + "2");//22
console.log("1" + 1 + 2);//112

console.log(+true);//1
console.log(true);//true


