// A function that remembers variable from its outer scope even after the outer fn has finished executing
function createBankAccount(){

    let balance = 500;


    return{
    // balance: 500,
    deposit: function(amount){
        if(typeof amount ==="number" && amount>0){
            balance+=amount;
            return balance;
        }
    },
    withdraw: function(amount){
        if(typeof amount ==="number" && amount>0 && balance>=amount){
            balance-=amount;
            return balance;
        }
    },
    getBalance: function(){
        return balance;  
    }
}
}
console.log(createBankAccount().withdraw(300));
console.log(createBankAccount().deposit(400));
console.log(createBankAccount().getBalance());
