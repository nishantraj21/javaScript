// Event ->> click, mouse move, double click
// Event Listener ->> Listening the event (click)
// Event Action ->> Welcome to my Website!

function handleClick(){
    const element = document.getElementById("first");
    element.textContent = "Welecome to my Website!";
}

// another method --> without function call in html file

const element2 = document.getElementById("second");
element2.onclick = function handleChanges(){
    element2.textContent = "Have a Nice day...";
} // if we call again then it will override so this is not good method 

// Best Method ***************************************
const element3 = document.getElementById("third");
element3.addEventListener('click', ()=>{
    element3.textContent = "Its Working....."
})

element3.addEventListener('click', ()=>{
    element3.style.backgroundColor="green";
    element3.style.color="white";
})

const parent = document.getElementById("parent");
console.log(parent.children);


for (let child of parent.children){
    child.addEventListener('click',()=>{
        child.textContent = "I am clicked"
    })
}

const grandParent = document.getElementById("grandparent");
grandParent.addEventListener('click',()=>{
    console.log("Grandparent is Clicked");
})

const Parent = document.getElementById("parent2");
Parent.addEventListener('click',()=>{
    console.log("Parent is Clicked");
})

const child = document.getElementById("child6");
child.addEventListener('click',()=>{
    console.log("Child is Clicked");
})