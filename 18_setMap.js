// set --> A Set is a list that enforces uniqueness. It's a collection of items where duplicates are impossible.

const arr = [10,25,35,10,14,25,19];

const s1 =  new Set(arr);
s1.add(11);
console.log(s1);

console.log(s1.has(20));
//s1.delete(11);
// for clear all values --> s1.clear()

//real world use case

const email = ["nish@gm","hello@gm","tna@gm","nish@gm"];

const uniqueEmail = [...new Set(email)];
console.log(uniqueEmail);

//Iterate

for(let num of uniqueEmail){
    console.log(num);
    
}

const a = [10,18,15,15,25]

// const s2 = new Set(a);
// for(let all of s2)
// {
//     console.log(s2);
    
// }

const m1 = new Map([
    ["Nishant",22],
    [2, "hello"],
    [true,11],
    [[10,25,18],"Raj"]
]);
console.log(m1);

m1.set({name:"Navin", age:23}, false);
console.log(m1);
