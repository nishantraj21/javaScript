//loops
console.log("for loop");

for (let i =0; i<10; i++)
{
    console.log(i);
    
}

console.log("while loop");

let j =0;
while(j<10)
{
    console.log(j);
    j++;
    
}

//conditional
let age=25;
if(age>=18)
{
    console.log("young");
    
}
else if(age>=50)
{
    console.log("old");
    
}
else{
    console.log("child");
    
}

let a = "rohit"
let b = "mohit"
let c = a&&b;//if first value is true it will return second value otherwise it will return first value.
console.log(c);

let m =10;
let n = 20;
let d= m||n;// if first value true it will return first value if false then return second value.
console.log(d);

