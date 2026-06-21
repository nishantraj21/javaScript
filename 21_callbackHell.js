// What is JS Core Nature?
// Js is single threadeed -  imagine a single worker whow can only do ONE task at a time.

// zomato Application

const orderDetail = {
    orderId : 225412,
    food: ["pizza", "coke", "biryani"],
    cost: 840,
    customer_name: "Nishant",
    customer_location: "Patna",
}

function placedOrder(callback){
    console.log("Payment is in progress");

    setTimeout(()=>{
        console.log("Payment is received and order get placed");
        callback();
    },3000)
    
}

function preparingOrder(callback){
    console.log("Your food preparation started");

    setTimeout(()=>{
        console.log("your order is now prepared");
        callback();
    })
    
}

function pickupOrder(callback){
    console.log("Deleivery boy on way");
    
    setTimeout(() => {
        console.log("I have picked up the order!");
        callback();
    },3000);
}

function orderPlaced(){
    console.log("I am on the way...");

    setTimeout(()=>{
        console.log("Order placed Successfully!!");
        
    },3000)
    
}

// Callback Hell
placedOrder(()=>{
    preparingOrder(()=>{
        pickupOrder(()=>{
            orderPlaced();
        })
    })
})