//! This is about the stings

//! Accessing character 
console.log(" This is string tutorial");
let a = "Mohit";

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);

console.log(a.length);

let real_name = "mohit"
let friend = "raushan"

console.log("His name is " + real_name + " his friend name is " + friend);

//! Template Literals 

console.log(`His name is ${real_name} and his friend name is ${friend}`);

let b = "Shivam "
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.length);
console.log(b.slice(1, 5));
console.log(b.slice(1));

console.log(b.replace("sh", "232"));

console.log(b.concat( a, " Arya", " Nikhil ", "Raushan"));