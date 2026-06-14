// Hoisting is js behaviour of knowing about a cariable or fn existence before executing the code.
// var: Hoisted and initialised with undefined
// let / const: Hoisted, but not initialised. They are put in a Temporal Dead zone
// more detail written in notes.


//GLobal -> Accessible to everyone
// BLock level-> accessible only to that block
// Funcitonal scope -> accessible only to that fn
let a = 10; // Global scope

if(true){
    let b = 20; // Block level Scope
}

function greet(){
    let global = 40;//funcitonal level scope
    console.log(global);
    
}
greet();
