const accountId = 225 // we cant change the value
let emailAdd = "nishantraj21092004@gmail.com" // we can change the value
var password = "N9shant123" //we can declare same variable name multiple time -> cons
city = "Patna"

// accountId = 125 // not allowed we cant change const

emailAdd = "howtocreate2020@gmail.com"
password = "Noteasy2113"
city = "Hydrabad"

console.log(accountId);

console.table([accountId, emailAdd, password, city]) // see data in table formate (index, values)

/* NOTES */

// if we declare variable in fn by using var then we are able to access outside the fn.
// but this problem is not appearing in "let".
// so go with let not var, otherwise we get lots of problems.


let a = 10
let b = "times"
let c = "Hello!";
console.log(a,b,c);

// let -> block scope
// var -> functional scope