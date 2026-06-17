//console.log("is Js file?");

const newElement = document.createElement("h2");

newElement.textContent = "Welecome to my website";
newElement.id = "second";

// select element
const element = document.getElementById("first");
element.after(newElement);
// element.before(newElement);

const newElement2 = document.createElement('h3');
newElement2.textContent = "Rainy season is coming";
newElement2.id = "third";

newElement2.className = "diwali";
newElement2.className = "+ Holi" // now newElement2 has two class h3#third.diwali.holi

// another safe method to assign class
// newElement2.classList.add("diwali");
// newElement2.classList.add("holi");

// newElement2.classList.remove("diwali");

console.log(newElement2);

newElement2.style.backgroundColor = "brown";
newElement2.style.fontSize = "30px";

element.before(newElement2);

// get and set attribute
newElement2.setAttribute("hello","ji");
console.log(newElement2.getAttribute("hello"));

// data added in list
const list = document.createElement("li");
list.textContent = "Milk";

const list2 = document.createElement('li');
list2.textContent = "Peanut Butter";

const list3 = document.createElement('li');
list3.textContent = "Oats";

const list4 = document.createElement('li');
list4.textContent = "Protein powder";

// select unordered list
const unorderedList = document.getElementById("listing");
unorderedList.append(list);// 1
unorderedList.append(list2);// 2
unorderedList.prepend(list3);// 0

list.after(list4);
//unorderedList.children[1].after(list4);

// real world implimantation **********

const arr = ["Books", "Pencil", "Spiral Copy", "Eraser"];

const shoppingElement = document.getElementById("shopping");

for(let shop of arr){
    const list = document.createElement("li");
    list.textContent = shop;
    shoppingElement.append(list);// directly append in UI
} // this method is not good for UI if too much data in arr

// best solution will be first create all element then append in list.

const arr2 = ["Potato", "Onion", "Ginger", "Pumkin", "Massala"];

const cookingElement = document.getElementById("cooking");
const fragment = document.createDocumentFragment();

for(let food of arr2){
    const list = document.createElement('li');
    list.textContent = food;
    fragment.append(list);
}

cookingElement.append(fragment);
