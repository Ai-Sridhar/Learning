// Function Declaration

function functionName() {
    // code
}

function greet() {
    console.log("Hello Sridhar!");
}

greet();

function add(a, b) {
    console.log(a + b);
}

add(5, 10);

//Global Variables and Local Variables
let name = "Sridhar";

function showName() {
    console.log(name);
}

showName();
console.log(name);

function test() {
    let age = 21;
    console.log(age);
}

test();
console.log(age);


//Fundamentals of Error Handling

try {
    let result = 10 / 0;
    console.log(result);

    console.log(x); // error
}
catch(error) {
    console.log("An error occurred!");
    console.log(error.message);
}

//Creating Array

let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);


//Sorting and Concatenating Array

let numbers = [5, 2, 8, 1];

numbers.sort();

console.log(numbers);


let arr1 = ["HTML", "CSS"];
let arr2 = ["JavaScript", "React"];

let result = arr1.concat(arr2);

console.log(result);

//Splicing and Slicing Array

let colors = ["Red", "Blue", "Green", "Yellow"];

let result = colors.slice(1, 3);

console.log(result);


let fruits = ["Apple", "Banana", "Mango"];

fruits.splice(1, 1);

console.log(fruits);


let fruits = ["Apple", "Mango"];

fruits.splice(1, 0, "Banana");

console.log(fruits);