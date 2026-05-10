function calculator(...num1){// rest operator use for pass multiple argument in single parameter
    num1.unshift(4);
    return num1;

}
console.log(calculator(7,84,21));

function sumAll(...num){
    let sum2 = 0;
    for(let i = 0; i < num.length; i++){
        sum2 += num[i];
    }

    console.log(sum2);


    let sum = num.reduce((acc, curr)=>{acc += curr; return acc;}, 0);
    return sum;
}
console.log(sumAll(4,8,6,5,4));

// another method for funciton initialisation
const addNumber = function(num1,num2){
    return num1+num2;
}

console.log(addNumber(8,7));// In this method we cant access before initialisation

// arrow function
// ()=>{
//    }

const multNumber = (num1,num2)=>{
    return num1*num2;
}
console.log(multNumber(4,5));

// if there is a single line in function then we no need to return in arrow function
// const addNumber = (num1,num2) => num1+num2;

// let arr = [10,45,12,84,11]
// arr.sort((a,b)=>a-b)
//console.log(arr);
// if we have single parameter, no need of this ()
const squareNumber = num =>num*num;
console.log(squareNumber(5));


const greeting = ()=> ({name:"Nishant", age: 22})// If we use curly bracket, then we need return value but we can handle this with parenthesis
console.log(greeting());


// another method
(function sayHello(){
    console.log("Hello world");
    
})();