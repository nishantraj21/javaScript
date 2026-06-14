// map method of array

const arr = [10,25,18,11,27];

const newArr = arr.map((num) => num*2 );
console.log(newArr);

// datas

const product = [
    //electronics
    {id:1, name: "Mouse", category: "Electronics", price: 450, inStock: true},
    {id:2, name: "Keyboard", category: "Electronics", price: 800, inStock: true},
    {id:3, name: "Laptop", category: "Electronics", price: 84450, inStock: true},
    {id:4, name: "Ram", category: "Electronics", price: 8800, inStock: false},

    //Books
    {id:5, name: "Atomic habbit", category: "Books", price: 350, inStock: true},
    {id:6, name: "The power of subconcious mind", category: "Books", price: 400, inStock: false},
    {id:7, name: "Talking with psycopath", category: "Books", price: 150, inStock: true},
    {id:8, name: "The art of persuasion", category: "Books", price: 200, inStock: true},
];

//const newProduct = product.filter((product)=> product.price>300).sort((a,b)=>b.price-a.price);

// console.log(newProduct);

const ans = product.map((product)=> ({name:product.name, price:product.price}));
console.log(ans);

// If you want to apply filter and map together so we simply chain on newProduct
const newProduct = product.filter((product)=> product.price>300).sort((a,b)=>b.price-a.price).map((product)=>({name:product.name, price:product.price}));
console.log(newProduct);