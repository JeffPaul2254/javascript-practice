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

*/