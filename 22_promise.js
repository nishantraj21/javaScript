// In JavaScript, a Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// It helps avoid callback hell and makes asynchronous code easier to read and maintain.

// Promise States
// A Promise can be in one of three states:

// Pending – Initial state, neither fulfilled nor rejected.
// Fulfilled – Operation completed successfully.
// Rejected – Operation failed.

console.log("Hello world Start");

// const p1 = fetch("https://api.github.com/users");
// console.log(p1); // Promise <pending> because it is ascynchronous task

// const p2 = p1.then((response)=>{
//     return response.json();//asynchronous task
// })
// p2.then((response)=>{
//     console.log(response);
    
// })


fetch("https://api.github.com/users")
.then((response)=>{

    if(!response.ok){
        throw new Error("Data is not present in server.");
    }
    return response.json();
})
.then((data)=>{
    // console.log(data);
    for(let i=0; i<data.length;i++){
        const parent = document.getElementById("first");
        const image = document.createElement('img');
        image.src = data[i].avatar_url;
        image.style.height = "40px";
        image.style.width = "40px";

        parent.append(image);
    
    }
})
.catch((error)=>{
    const parent = document.getElementById("first");
    parent.textContent = error.message;
})

console.log("Hello world End");
