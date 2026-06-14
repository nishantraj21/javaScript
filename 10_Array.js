// in javaScript array is an object type
// if arr2 = arr1, both will point out same object. so, changes in arr2 is also a changes in arr1

let arr = [10,20,"Nishant"];
console.log(arr);
//push and pop operation 

arr.push(80); // add element at last postion
arr.push("patna"); // add element at last position
console.log(arr);

arr.pop(20); // delete element from last position
console.log(arr);
arr.pop(); // delete element from last position
console.log(arr);

arr.unshift(25);// add element at first position
console.log(arr);
arr.shift();//delete element form last position
console.log(arr);


// avoid shift and unshift because it takes more time 

for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
    
}

//another method
for (let num of arr)
{
    console.log(num);
    
}

let arr1=[10,20,30,40,50,60,35,70];
let arr2 = arr1;
arr2 = arr1.slice(2,4)
console.log(arr2);

console.log(arr1); // not slice in original array
const arr3= arr1.splice(2,5,"nishant");//slice in original array. here 2 to 5 removed and "nishant" added
console.log(arr1);


const arr4 = ['rahul', 25];
const arr5 = [22,29];
//arr5.push(arr4) // [22, 29, ['rahul', 25]]

const arr6 = arr5.concat(arr4); // we can concat multiple array
console.log(arr6);


// spread operator

//const arr6 = [...arr4,...arr5];

const names = ["Alice", "Bob", "alex","Charlie","Rohit","Mohit"];
console.log(names.toString());
console.log(names.join("-"));

//sort
names.sort();
console.log(names);
names.reverse();
console.log(names);


const num1 = [101,35,45,78,11];
num1.sort(); // soritng in number also be considered as string to sort according to ASCII value
console.log(num1);

// How to sort number?
num1.sort((a,b) => a-b)
console.log(num1);


//nested array
const array = [10,27,30,[15,24,[78,12,1],22],24];
console.log(array[3][2][1]);

const a = array.flat(Infinity);
console.log(a);
