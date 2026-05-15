//JavaScript Introduction

/*
<button onclick="showMessage()">Click Me</button>

<script>
function showMessage() {
    alert("Welcome Sridhar!");
}
</script> */

//Getting Started with JavaScript Programming

/*  
<script>
    console.log("Hello JavaScript");
</script> 

<script src="script.js"></script>

*/


//Numbers in JavaScript

let a = 10;
let b = 5.5;

console.log(a);
console.log(b);

let x = 10;
let y = 3;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

console.log(typeof 10);


//Dates in JavaScript

let today = new Date();

console.log(today);

let year = new Date().getFullYear();

console.log(year);


//Arithmetic Operators

let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//Logical and Conditional Operators

let age = 20;

console.log(age > 18 && age < 30);

let marks = 80;

if(marks >= 50) {
    console.log("Pass");
}
else {
    console.log("Fail");
}

//Typecasting

let num = "100";

console.log(Number(num));

let value = 50;

console.log(String(value));


//Looping Control Structures

for(let i = 1; i <= 5; i++) {
    console.log(i);
}

let i = 1;

while(i <= 3) {
    console.log(i);
    i++;
}

let i = 1;

do {
    console.log(i);
    i++;
}
while(i <= 3);


//Math Library for Math Operations

console.log(Math.sqrt(25));
console.log(Math.pow(2, 3));
console.log(Math.random());


//Initializing and Manipulating String in JavaScript

let name = "Sridhar";

console.log(name);
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());

let text = "Hello World";

console.log(text.replace("World", "Sridhar"));