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

function placedOrder(orderDetail){
    console.log(`${orderDetail.cost} Payment is in progress`);

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Payment is received and order get placed");
            resolve(orderDetail);
        },3000);
    })
    
    
}

function preparingOrder(orderDetail){
    console.log(`Your food preparation started of ${orderDetail.food}`);

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("your order is now prepared");
            orderDetail.token = 123;
            resolve(orderDetail);
        },3000);
    })
    
    
}

function pickupOrder(orderDetail){
    console.log("Deleivery boy on way");
    
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("I have picked up the order!");
            orderDetail.received = true;
            resolve(orderDetail);
        },3000);
    })
}

function orderPlaced(orderDetail){
    console.log("I am on the way...");

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Order placed Successfully!!");
            orderDetail.delivery = true;
            resolve(orderDetail);
        },3000);
    })
    
}

// Callback Hell
// placedOrder(()=>{
//     preparingOrder(()=>{
//         pickupOrder(()=>{
//             orderPlaced();
//         })
//     })
// })

placedOrder(orderDetail)
.then((orderDetail)=>preparingOrder(orderDetail))
.then((orderDetail)=>pickupOrder(orderDetail))
.then((orderDetail=>orderPlaced(orderDetail)))
.then((orderDetail)=>{
    console.log(orderDetail);
})
.catch((error)=>{
    console.log("Error:", error.message);
    
})