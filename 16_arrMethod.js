//forEach Method
const arr = [10,20,74,52,11];

let sum =0;

arr.forEach((number)=>{
    console.log(number);
    
    
})

arr.forEach((number)=>{
    sum+=number;
})
console.log(sum);

arr.forEach((number,index)=>{
    console.log(number,index);
    
})

arr.forEach((number,index, arr)=>{
    console.log(number,index,arr);
    
})

//Filter Method

const arr1 = [24,78,11,25,35]

const newArr1 = arr1.filter((number)=>number>25);

console.log(newArr1);

//customized method by user to understand working.

//const compare = (number)=> number>25;

arr1.filtering = function(compare){
    const ans =[];
    for(let num of this){
        if(compare(num)){
            ans.push(num);
        }
    }
    return ans;
}

// This filtering method is working only for arr1
// If you want to this customized filtering method works for every array 
// then this technique we need
// Array.Prototype.filtering = function(compare){......}

const newArr = arr1.filtering((num)=>num>25);
console.log(newArr);
