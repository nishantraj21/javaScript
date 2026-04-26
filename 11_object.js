const user = {
    name: "Nishant",
    age: 22,
    emailId: "nishant@gmail.com" 
}

console.log(user);
console.log(user.age);
console.log(user["age"]);
user.aadhar = 1234;
console.log(user);

//get keys from object
console.log(Object.keys(user));

//get values from object
console.log(Object.values(user));

console.log(Object.entries(user));
