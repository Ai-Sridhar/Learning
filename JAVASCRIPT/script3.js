//Introduction to Objects

let car = {
   color: "Red",
   brand: "BMW",
   speed: 200
};

let student = {
    name: "Sridhar",
    age: 21,
    course: "AI & DS"
};

console.log(student.name);
console.log(student.age);

let person = {
    name: "Sridhar",

    greet: function() {
        console.log("Hello");
    }
};

person.greet();


//Object Constructor

function Student(name, age) {
    this.name = name;
    this.age = age;
}

let s1 = new Student("Sridhar", 21);
let s2 = new Student("Rahul", 22);

console.log(s1.name);
console.log(s2.name);



//Reduce and Filter Methods

let numbers = [10, 20, 30, 40];

let result = numbers.filter(num => num > 20);

console.log(result);


let nums = [1, 2, 3, 4];

let total = nums.reduce((sum, num) => sum + num, 0);

console.log(total);



//Instanceof Operator

function Person(name) {
    this.name = name;
}

let p1 = new Person("Sridhar");

console.log(p1 instanceof Person);



/*
5. Client Server Environment

6. History and Purpose of JavaScript

7. Programming Concepts

*/


//8. Manipulating Data with Arrays and String Function

let arr = [1, 2];

arr.push(3);

console.log(arr);

arr.pop();


let nums = [1, 2, 3];

let result = nums.map(n => n * 2);

console.log(result);


let text = "JavaScript";

console.log(text.includes("Java"));


let text = "HTML,CSS,JS";

console.log(text.split(","));


// Making HTML Dynamic using JavaScript
/*
<h1 id="title">Hello</h1>

<button onclick="changeText()">Click</button>

<script>
function changeText() {
    document.getElementById("title").innerHTML = "Welcome Sridhar!";
}
</script>

*/



//10. Input and Form Validation

/*
<input type="text" id="name">

<button onclick="validate()">Submit</button>

<script>
function validate() {

    let name =
    document.getElementById("name").value;

    if(name == "") {
        alert("Name required");
    }
    else {
        alert("Success");
    }
}
</script>
*/



//Using Classes to Build JavaScript Objects

class Student {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello " + this.name);
    }
}

let s1 = new Student("Sridhar", 21);

s1.greet();



//Working with Date Operations

let date = new Date();

console.log(date);

console.log(date.getDate());

console.log(date.getMonth() + 1);

console.log(date.getFullYear());


console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());