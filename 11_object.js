const user = {
    name: "Nishant",
    age: 22,
    emailId: "nishant@gmail.com", 
    0: 100,
    1: 200,
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

// another method to access key and value
for(let keys in user ){
    console.log(keys, user[keys]);
    
}

//destructuring the object

const {name,age} = user;

console.log(name,age);

const arr = [10,20,30,40,50];

const [first,second] = arr;
console.log(first,second);

const {emailId: userEmail, aadhar: userAadhar} = user
console.log(userEmail, userAadhar);


// function in object

const calculator = 
{
    input1: 25,
    input2: 47,
    name: "calc",
    greeting: function(){
        console.log(`welcome! on this ${this.name}`);
        return 2026;
    },
    address: {
        city: "patna",
        state: "Bihar"
    } 

}
console.log(calculator);
/*
//console.log(calculator.greeting());
console.log(calculator.address.city);

// shallow copy
// const user2 = {...user}; // Independent copy but it will not correct nested object

//deep copy 
// let temp = {};
// Object.assign(temp, calculator);//shallow copy
// console.log(temp);

const user2 = structuredClone(calculator);
user2.address.city = "Aurangabad";
console.log(calculator); // in deep clone dont clone functions and DOM elements.
console.log(user2);*/