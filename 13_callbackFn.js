/*

A callback function in JS is a funtion passed as an argument to another function. 
This allows the receiving function, 
often called a higher-order function, 
to execute the callback function at a specific point during its operation, 
typically after a particular task is compledted.

*/

function greet(){
    console.log("hello, good morning!");
    
}

function meet(callback){
    console.log("Nice to meet you");
    callback();
    //greet()// hardcode
    console.log("Hey what's up");
    
}

meet(greet);

// example of callback Funcito
function blinkitOrder(){
    console.log("order ready for delivery");
    
}

function swiggyOrder(){
    console.log("we have started preparing your food");
}

function payment(amount,callback){
    console.log(`${amount} payment has initialized`);
    console.log("Payment is received");
    //swiggyOrder();//hardcode
    callback();

    //GST: Government
    //Rider's payment
    
}

payment(500,blinkitOrder);
payment(300, swiggyOrder);