const str1 = "Hello"
const str2 = 'Nishant'
let num = 22;
console.log(`age of ${str2} is: ${num}`);

const str = "Hello Nishant, How are you?"

console.log(str.length);
console.log(str.toUpperCase()); // to write in uppercase
console.log(str.toLowerCase()); // to write in lowercase

console.log(str.indexOf("Nis"));
console.log(str.indexOf("Nat"));

console.log(str.lastIndexOf("Nis"));
console.log(str.includes("ant"));
console.log(str.slice(5,9));
console.log(str.slice(7));
console.log(str.slice(-3));

console.log(str.substring(5,9));

console.log(str.replaceAll('Hello', 'Hi!'));// replace word

const user = "  Nishant    Raj   "
console.log(user.trim()); // remove unwanted space

const name = "Rahul,Suresh,Sweta,Dinkar";
console.log(name.split(","));
let names = name.split(",");
console.log(names[1]);

