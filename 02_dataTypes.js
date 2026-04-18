"use strict"; // treat all JS code as newer version

// alert(5+2) // we are using nodejs not browser

console.log(3+2)
console.log("Nishant");
console.log('Hello_World')
console.log("'Hello_World'")

let name = 'Nishant'
let age = 21
let isLogedIn = false

// number => 2 to power 53
// bigint
// string -> ""
// boolean => true/false
// null --> when we check typeof null its show object that is bug in js
// Undefined =>
// symbol => unique

const id1 = Symbol("id");
console.log(id1);

const id2 = Symbol("id");
console.log(id2);

console.log(id1==id2);


// object

console.log(typeof "hello")
console.log(typeof null) // object
console.log(typeof undefined) //undefined

let bigInt = 5459585979999844n
console.log(bigInt);

//single line comment
/* multiple 
line
comment */

//Array
let arr = [10,20,11.2,"Nishant"];
console.log(arr);

// Object
let user = {
    name: "Nishant",
    regNo: 22105125002,
    age: 22,
    gender: 'male'
}

let user2 = user;
user2.name = "hello";

console.log(user);// in output name shown hello while in user object name is nishant, the reason is non-primitive data types are mutable


console.log(typeof user); // object


let s = function add(){
    console.log("This is function");
    
} // variable also stores function

s();

console.log(typeof arr); // object
console.log(typeof null); // object
console.log(typeof s); // object