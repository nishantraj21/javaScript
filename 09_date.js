const now = new Date(); 

console.log(now); // it will show UTC time

console.log(now.toString()); // Indian Standard Time

console.log(now.toISOString());

console.log(now.toLocaleString());

console.log(now.getDay());
console.log(now.getDate());
console.log(now.getFullYear());
console.log(now.getMonth()+1);
console.log(now.getSeconds());

const newDate = Date.now();
console.log(newDate); // date in millisecond

const dates = new Date(1776818164916);
console.log(dates);
