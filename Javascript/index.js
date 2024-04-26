//console.log("Hello");
//window.alert("This is an alert");

//this is a comment

/* this is also a comment */
/*
document.getElementById("myH1").textContent = "Hello self";
document.getElementById("myP").textContent = "I'll be a web Dev."

variable = A container that stores a value, behaves as if it were value it conatains.
1. declaration let x;
2. aasignment x = 100;



let age = 25;
let price = 10.99;
let gpa = 2.1;
let x = 100; //number
let firstName = "pregie"; //strin
let online = true; //boolean (true or false)


console.log(typeof age); //to know what data type there is
console.log("you are " + age + " yrs old and your gpa is " + gpa);

let fullName = "Pregie santiago";
let age = 25;
let student = false;

document.getElementById("p1").textContent = fullName;
document.getElementById("p2").textContent = age;
document.getElementById("p2").textContent = student;


// arrithmetic operators 

//let username = window.prompt("what's your username?");
//console.log(username);

//collect information of user:
let username;
document.getElementById("mySubmit").onclick = function(){
username = document.getElementById("myText").value;
document.getElementById("myH1").textContent = `Hello ${username}`;
}
*/

//type conversion = change the datatype of a value to another
//           (strings,  numbers,  booleans)

let age = window.prompt("how old are you?");
age =Number(age);
age+=1;

console.log(age, typeof age);
