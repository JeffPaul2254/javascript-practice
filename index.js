/*

console.log('Hello');
console.log('I like briyani');

window.alert('This is an alert');
window.alert('This is an my hateful life'); 

document.getElementById('myH1').textContent = 'Hello';
document.getElementById('myP').textContent = 'I like chicken';


// this is a comment

// variables
let x;
x = 90;
console.log(x);
console.log(x+25);

// numbers
let age1 = 21;
console.log(`you are ${age1} years old`);

let gpa = 7.0;
console.log(`your gpas is ${gpa}`);
console.log(typeof gpa);

// strings
let firstname = "Jeffrey";
console.log(typeof firstname);
console.log(firstname);

let lastname = "Paulouse";
console.log(`your last name is ${lastname}`);

// Booleans
let online = false;
let forSale = true;
let isStudent = true;
console.log(typeof online);
console.log(`Jeffrey is online:  ${online}`);
console.log(`Is this car for sale: ${forSale}`);
console.log(`Enrolled: ${isStudent}`);

let fullName = "Jeffrey Paulouse";
let age = 21;
let student = false;

document.getElementById('p1').textContent = `Your name is ${fullName}`;
document.getElementById('p2').textContent = `Your age is ${age}`;
document.getElementById('p3').textContent = `Enrolled: ${student}`;

//arithemetic operators

let students = 54;
//students = students - 4;
//students = students + 4;
//students = students / 4;
//students = students * 4;
//students = students ** 2;
let extrastudents = students % 4;

console.log(students);
console.log(extrastudents);

//augmented assignment operators

let students = 54;

//students += 2;
//students -= 1;
//students /= 2;
//students *= 4;
//students **= 2;
//students %= 2;

console.log(students);

//increment and decrement operator

let students = 24;
//students++;
//students--;
console.log(students);

//operator precedence 1.paranthesis() 2. exponents(**) 3.*,/,%  4.+,-

let result = 1 + 2 * 3 + 4 ** 2;
console.log(result);

//accept user input

let username = window.prompt(`Whats ypur username?`);
console.log(username);

let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myH1").textContent = `Hello ${username}`;
}

//type conversions
let age = window.prompt("How old are you?");
age = Number(age);
age+=1;
console.log(age,typeof age);

let x = "briyani";
let y = "briyani";
let z = "briyani";
let a = "";

x = Number(x);
y = String(y);
z = Boolean(z);
a = Boolean(a);

console.log(x,typeof x);
console.log(y,typeof y);
console.log(z,typeof z);
console.log(a,typeof a);


//constants = variable that cannot be changed

//through console
const pi = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of the cirlce:");
radius = Number(radius);

circumference = 2 * pi * radius;
console.log(circumference);
 
//through webpage
const pi = 3.14159;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function(){
       radius = document.getElementById("myText").value
       radius = Number(radius);
       circumference = 2 * pi * radius; 
       document.getElementById("myH3").textContent = "The circumference is " + circumference + "cm";
}

//math = built-in object that is a collection of properties and methods

console.log(Math.PI);
console.log(Math.E);

let x = 3.5;
let y = 4;
let z;

z = Math.round(x);
console.log(z);
z = Math.floor(x);
console.log(z);
z = Math.ceil(x);
console.log(z);
z = Math.trunc(x);
console.log(z);
z = Math.pow(x,y);
console.log(z);
z = Math.sqrt(x);
console.log(z);
z = Math.log(x);
console.log(z);
z = Math.sin(x);
console.log(z);
z = Math.cos(x);
console.log(z);
z = Math.tan(x);
console.log(z);
let a = -2.141;
b = Math.abs(a);
console.log(b);
b = Math.sign(a);
console.log(b);
let max = Math.max(x,y,a);
console.log(max);
let min = Math.min(x,y,a);
console.log(min);

//Random number generator

let randomNum = Math.floor(Math.random() * 6) + 1;
console.log(randomNum);

const min = 50;
const max = 100;
let randomNumb = Math.floor(Math.random() * (max - min)) + min;
console.log(randomNumb);

// if statements

let age = 21;

if(age >= 18) {
    console.log("you are old enough to work");
}
else {
    console.log("you are not old enough to work");
}

//exampl 2
let time = 14;
if(time < 12) {
    console.log("Good Morning");
}
else {
    console.log("Good Afternoon");
}

//with boolean

let isStudent = false;
if(isStudent){
    console.log("YOU ARE A STUDENT")
}
else{
    console.log("YOU ARE NOT A STUDENT")
}

//Nested if statements

let age = 21;
let hasLicense = true;
if(age >=18) {
    console.log("you are old enough to drive");

    if(hasLicense){
        console.log("You hav License");
    }
    else{
        console.log("You dont have License")
    }
}
else {
   console.log("you are not old enough to have a license");
}

//else if statements

let age = 0;

if(age >= 1000){
    console.log("You are too old to be alive");
}
else if(age == 0){
    console.log("CONGRATULATIONS YOU WERE JUST BORN");
}
else if(age >= 18){
    console.log("You are old enough to enter this site");
}
else if(age < 0) {
    console.log("you cannot be below 0 years old");
}

else{
    console.log("You must be 18+ to enter this site");
}
           
*/