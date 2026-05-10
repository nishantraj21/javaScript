function calculator(...num1){// rest operator use for pass multiple argument in single parameter
    num1.unshift(4);
    return num1;

}
console.log(calculator(7,84,21));

function sumAll(...num){
    let sum2 = 0;
    for(let i = 0; i < num.length; i++){
        sum2 += num[i];
    }

    console.log(sum2);


    let sum = num.reduce((acc, curr)=>{acc += curr; return acc;}, 0);
    return sum;
}
console.log(sumAll(4,8,6,5,4));
