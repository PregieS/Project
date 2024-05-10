
/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

let firstName = 'jonas';
console.log(firstName);
console.log(firstName);
console.log(firstName);


const age = 15;

if(age >= 18){
    console.log('sarah can start driving');
} else{
    const yearsleft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsleft} years :)`);
}

const birthYear = 1987

let century;
 if(birthYear <= 2000){
    century = 20;
 } else {
    century = 21;
 }

 console.log(century)
 */
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if(BMIMark > BMIJohn){
    console.log(`Mark's BMI (${BMIMark}) is Higher than John's! (${BMIJohn})`);
}else{
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's! (${BMIMark})`);

}

let n = "1" + 1;
n = n - 1;
console.log(n);


let playerList = ["red", "yellow", "green"];
    playerList = prompt("what's your user name?");
if (player === "red"){
    console.log("Welcome master red!");
}

const day = " monday";