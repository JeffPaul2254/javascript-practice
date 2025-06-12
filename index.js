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

//ternary operator is a shortcut of if else statements

let age = 21;
let message = age >= 18 ? "You are a Adult" : "You are a minor";
console.log(message);

let time = 16;
let greeting = time < 12 ? "Good Morning" : "Good Afternoon";
console.log(greeting);

let purchaseAmount = 125;
let discount = purchaseAmount >- 100 ? 10 : 0;
console.log(`Your total amount is $${purchaseAmount - purchaseAmount * (discount/100)}`);

//switches

//example 1

let day = `jeff`;

switch(day) {
        case 1:
        console.log("It is Monday");
        break;
        case 2:
        console.log("It is Tuesday");
        break;
        case 3:
        console.log("It is Wednesday");
        break;
        case 4:
        console.log("It is Thursday");
        break;
        case 5:
        console.log("It is Friday");
        break;
        case 6:
        console.log("It is Saturday");
        break;
        case 7:
        console.log("It is Sunday");
        break;
        default:
        console.log(`${day} is not a day`);

}

//example 2

let testScore = 95;
let letterGrade;

switch(true){
        case testScore >= 90:
        letterGrade = "A";
        break;
        case testScore >= 80:
        letterGrade = "B";
        break;
        case testScore >= 70:
        letterGrade = "C";
        break;
        case testScore >= 60:
        letterGrade = "D";
        break;
        default:
        letterGrade = "E";
}
console.log(letterGrade);

//string methods

let userName = "JeffPaul";
userName.charAt(0);
console.log(userName.charAt(0));

userName.indexOf("a");
console.log(userName.indexOf("f"));
console.log(userName.lastIndexOf("f"));

console.log(userName.length);

userName = userName.trim();
console.log(userName)

userName = userName.toUpperCase();
console.log(userName)

userName = userName.toLowerCase();
console.log(userName)

userName = userName.repeat(5);
console.log(userName)

let userName = " JeffPaul ";
let result1 = userName.startsWith(" ");
console.log(result1);
if(result1) {
    console.log(`Your username cannot begin with ' '`);
}
else{
    console.log(userName);
}

let result2 = userName.endsWith(" ");
console.log(result2)

let phoneNumber = "701-939-2700";
phoneNumber = phoneNumber.replaceAll("-","/");
console.log(phoneNumber);

phoneNumber = phoneNumber.padStart(25,"0");
console.log(phoneNumber);

phoneNumber = phoneNumber.padEnd(25,"0");
console.log(phoneNumber);

//string slicing

const fullName = "Jeffrey Paulouse";

let firstName = fullName.slice(0,7);
console.log(firstName);
let lastName = fullName.slice(8,16);
console.log(lastName);
let firstChar = fullName.slice(0,1);
console.log(firstChar);
let lastChar = fullName.slice(-1);
console.log(lastChar);

const fullName = "Jeffrey Paulouse";

let firstName = fullName.slice(0, fullName.indexOf(" "));
console.log(firstName);
let lastName = fullName.slice(fullName.indexOf(" ") + 1);
console.log(lastName);

const email = "jeffreyapulousem24@gmail.com";

let username = email.slice(0,email.indexOf("@"));
console.log(username);
let extension = email.slice(email.indexOf("@") + 1);
console.log(extension);

//no method training

let username = window.prompt("Enter your username");
username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();
let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;
console.log(username);      

//Method chaining

let username = window.prompt("Enter your username");
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);              

//Logical Operators

// &&  AND 

const temp = 21;

if(temp > 0 && temp <=30) {
    console.log("Weather is good");
}
else {
    console.log("The weather is bad");
}

// || OR

const temp = 25;
if(temp <= 0 || temp > 30) {
    console.log("Weather is BAD");
}
else {
    console.log("The weather is GOOD");
} 

// ! NOT

const isSunny = true;
 if(!isSunny) {
    console.log("It is cloudy");
 }
 else{
    console.log("It is sunny");
 }

//Strict equality operator (===) compares values and datatypes

const PI = 3.14;
if(PI === "3.14"){
    console.log("That is PI");
}
else{
    console.log("That is not PI");
}

//inequality operator (!=)

const PI = 3.14;
if(PI != "3.14"){
    console.log("That is not PI");
}
else{
    console.log("That is PI");
}

//strict inequality operator (!==)

const PI = 3.14;
if(PI !== "3.14"){
    console.log("That is not PI");
}
else{
    console.log("That is PI");
}

//While loops:loops as long as condition is true

let username = "";

while(username === "" || username === null){
    username = window.prompt("Enter your name: ");
}
    console.log(`Hello ${username}`);

//do while

let username;
do{
    username = window.prompt("Enter your name: ");
}
    while(username === "" || username === null)
    console.log(`Hello ${username}`);
 
//example 2

let loggedIn = false;
let username;
let password;
while(!loggedIn){
    username = window.prompt("Enter your username: ");
    password = window.prompt("Enter your password: ");

    if(username === "myUSername" && password === "myPassword"){
        loggedIn = true;
        console.log("You are logged in");
    }
}

//for loops : repeat code a specific number of times

for(let i = 10; i > 0; i-=1){
    console.log(i);
}
console.log("Happy birthday");

//continue
for(let i = 1; i <=20; i++){
    if(i = 13){
        continue;
    }
    else{
        console.log(i);
    }
}

//break
for(let i = 1; i <=20; i++){
    if(i = 13){
        break;
    }
    else{
        console.log(i);
    }
}

//functions

function happyBirthday(username, age){
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday dear ${username}!`);
    console.log(`You are ${age} years old!`);
}
happyBirthday("Jeffrey", 21);
happyBirthday("ghost", 5000);

//return keyword

//example 1
function add(x, y){
    let result = x + y;
    return result;
}
function sub(x, y){
    return x - y;
}
function multiply(x, y){
    return x * y;
}
function divide(x , y){
    return x / y;
}
console.log(add(2, 3));
console.log(sub(2, 3));
console.log(multiply(2, 3));
console.log(divide(2, 3));
       
*/
//example 2
function add(x, y){
    let result = x + y;
    return result;
}
function sub(x, y){
    return x - y;
}
function multiply(x, y){
    return x * y;
}
function divide(x , y){
    return x / y;
}
function isEven(number){
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
function isValidemail(email){
    return email.includes("@") ? true : false;
}
console.log(isValidemail("ELONMUS,com"));
console.log(isValidemail("ELONMUS@com"));
