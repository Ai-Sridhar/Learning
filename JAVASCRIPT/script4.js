//DOM Manipulation

/*
<h1 id="title">Hello</h1>

<button onclick="changeText()">Click</button>

<script>
function changeText() {
    document.getElementById("title").innerHTML =
    "Welcome Sridhar!";
}
</script>
*/


//Document Object and Window Object

window.alert("Hello");

console.log(document.title);



//Methods in Document Object

/*
<p id="demo">Hello</p>

<script>
let text = document.getElementById("demo");

console.log(text.innerHTML);
</script>
*/



//createElement()

/**
 <div id="container"></div>

<script>
let p = document.createElement("p");

p.innerText = "New Paragraph";

document.body.appendChild(p);
</script>
 */


//setAttribute()

let img = document.createElement("img");

img.setAttribute("src", "image.jpg");

document.body.appendChild(img);


//innerHTML vs innerText

/*
<div id="demo">
   <h1>Hello</h1>
</div>

<script>
let data =
document.getElementById("demo");

console.log(data.innerHTML);
console.log(data.innerText);
</script>
 */



//append() vs appendChild()

let div = document.createElement("div");

div.append("Hello");

document.body.append(div);



//getElementById() vs querySelector()

/*
<p class="text">Hello</p>

<script>
console.log(
document.querySelector(".text")
);
</script>
*/



//Methods in Window Object

alert("Welcome");

let name = prompt("Enter name");

let result = confirm("Are you sure?");



//prompt() vs alert() vs confirm()




//Dynamic Styling with JavaScript

/*
<h1 id="title">Hello</h1>

<script>
let title =
document.getElementById("title");

title.style.color = "red";
title.style.fontSize = "50px";
</script>
*/


//setTimeout() vs setInterval()

setTimeout(() => {
   console.log("Hello");
}, 2000);


setInterval(() => {
   console.log("Running");
}, 1000);


//Cookies, Session Storage & Local Storage

localStorage.setItem("name", "Sridhar");

console.log(
localStorage.getItem("name")
);



//Calculator Example

/*
<input type="number" id="a">
<input type="number" id="b">

<button onclick="add()">
Add
</button>

<h1 id="result"></h1>

<script>
function add() {

let a =
Number(document.getElementById("a").value);

let b =
Number(document.getElementById("b").value);

document.getElementById("result")
.innerText = a + b;
}
</script>
*/


//Sets and Maps

let data = new Set();

data.add(10);
data.add(10);

console.log(data);

let user = new Map();

user.set("name", "Sridhar");

console.log(user.get("name"));



//Callback & Event Loop

function greet(name, callback) {
   console.log(name);

   callback();
}

greet("Sridhar", function() {
   console.log("Done");
});



//Promise


let promise = new Promise((resolve, reject) => {

   let success = true;

   if(success) {
      resolve("Success");
   }
   else {
      reject("Failed");
   }
});

promise.then(result => {
   console.log(result);
});



/*
18. States in Promise
State	Meaning
Pending	Waiting
Fulfilled	Success
Rejected	Failed
*/



//Promise Chaining

Promise.resolve(5)

.then(num => num * 2)

.then(num => num + 10)

.then(result => {
   console.log(result);
});



//Fetch API

fetch("https://jsonplaceholder.typicode.com/users")

.then(response => response.json())

.then(data => {
   console.log(data);
});



//Async/Await

async function getData() {

   let response =
   await fetch(
   "https://jsonplaceholder.typicode.com/users"
   );

   let data =
   await response.json();

   console.log(data);
}

getData();



//Responsive System
/*
@media(max-width:600px) {

   body {
      background: red;
   }
}
*/


//HTTP, Headers & URL Params

/*
📌 HTTP Methods
Method	Purpose
GET	Read
POST	Create
PUT	Update
DELETE	Remove


📌 URL Params Example
https://example.com?id=10

id=10 is query parameter.


headers: {
   "Content-Type": "application/json"
}

*/


//Demystifying CORS Policies

/*
CORS =

Cross-Origin Resource Sharing

Browser security policy.

📌 Problem

Frontend:

localhost:3000

Backend:

localhost:5000

Different origins.

Browser blocks request.

📌 Solution

Backend must allow:

Access-Control-Allow-Origin
🎯 Deep Understanding

CORS protects users from malicious websites.
*/
