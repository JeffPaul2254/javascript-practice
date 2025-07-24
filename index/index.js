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
 
//Variable scope :local and global

//local

function function1(){
    let x = 1;
    console.log(x);
}
function function2(){
    let x = 2;
    console.log(x);
}
function1();
function2();

//global

let x = 3;
function function1(){
    console.log(x);
}
function function2(){
    console.log(x);
}
function1();
function2();

//arrays

//example1

let fruit = ["apple","orange","banana"];

//fruit[3] = "coconut";
//fruit.push("coconut");
//fruit.pop();
//fruit.unshift("mango");
//fruit.shift();

console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);
console.log(fruit[3]);

let numOfFruits = fruit.length;
console.log(numOfFruits);
let index = fruit.indexOf("mango");
console.log(index);

//example2

let fruit = ["apple","orange","banana","coconut"];
for(let i = fruit.length - 1; i >= 0; i--)
{
    console.log(fruit[i]);
}

//example3
let fruit = ["apple","orange","banana","coconut"];
for(let i = 0; i < fruit.length; i++)
{
    console.log(fruit[i]);
}

//example4
          
let fruits = ["apple","orange","banana","coconut"];
//fruits.sort();
fruits.sort().reverse();
for(let fruit of fruits){
    console.log(fruit);
}

//spread operator

//example1
let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);
console.log(numbers);
console.log(maximum);
console.log(minimum);

//example2

let username = "Jeffrey Paulouse";
let letters = [...username].join(".");
console.log(letters);

//example3

let fruits = ["apple","orange","banana"];
let vegetables = ["carrots","tomato","potato"];

let foods = [...fruits,...vegetables,"eggs","milk"];
console.log(fruits);
console.log(foods);

//Rest Parameters(opposite of spread)

//example1

function openFridge(...foods){
    console.log(...foods);
}
function getFood(...foods){
    return foods;
}

const food1 = "pizza";
const food2 = "briyani";
const food3 = "KFC";
const food4 = "sushi";
const food5 = "ramen";

//openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);
console.log(foods);

//example2

function sum(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}
const total = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(`Your total is $${total}`);

//example3

function sum(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}
function getAverage(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}
const total = getAverage(75, 100, 90, 80, 40);
console.log(total);

//example4

function combineString(...strings){
    return strings.join(" ");
}

const fullName = combineString("Mr.","SpongBob","SquarePants","the","Fifth");
console.log(fullName);

//callback function

//example1

function hello(callback){
    console.log("Hello");
    callback();
}

function goodbye(){
    console.log("Goodbye");
}

function leave(){
    console.log("Leave!");
}

function wait(){
    console.log("Wait!");
}
hello(wait);

//exampl2

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("myH1").textContent = result;

}

sum(displayPage, 5, 8);

//forEach() method : array.forEach(callback);

//example1

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(cube);
numbers.forEach(square);
numbers.forEach(triple);
numbers.forEach(double);
numbers.forEach(display);

function double(element, index, array){
    array[index] = element * 2;
}

function triple(element, index, array){
    array[index] = element * 3;
}

function square(element, index, array){
    array[index] = Math.pow(element, 2);
}

function cube(element, index, array){
    array[index] = Math.pow(element, 3);
}

function display(element){
    console.log(element);
}

//example2

let fruits = ['apple','banana','orange','coconut'];

fruits.forEach(capitalize);
//fruits.forEach(lowerCase);
//fruits.forEach(upperCase);
fruits.forEach(display);

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function lowerCase(element, index, array){
    array[index] = element.toLowerCase();
}

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element){
    console.log(element);
}

//.map() method

//example1

const  numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(square);
console.log(squares);

const cubes = numbers.map(cube);
console.log(cubes);

function square(element){
    return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
}

//example2

const students = ['Jeffrey','Joshua','Jason','Akshay'];

const studentsUpper = students.map(upperCase);
console.log(studentsUpper);

const studentsLower = students.map(lowerCase);
console.log(studentsLower);

function upperCase(element){
    return element.toUpperCase();
}

function lowerCase(element){
    return element.toLowerCase();
}

//example3

const dates  = ["2004-5-10","2025-2-20","2026-3-30"];
const formattedDates = dates.map(formatDates);
console.log(formattedDates);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

//.filter() method 

//example1

let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);
console.log(evenNums);
let oddNums = numbers.filter(isOdd);
console.log(oddNums);

function isEven(element){
    return element % 2 == 0;
}

function isOdd(element){
    return element % 2 !== 0;
}

//example2

const ages = [16, 17, 18, 18, 19, 20, 16];
const adults = ages.filter(isAdult);
console.log(adults);
const children = ages.filter(isChild);
console.log(children);

function isAdult(element){
    return element >= 18;
}

function isChild(element){
    return element < 18;
}

//example3

const words = ["Chemistry","Biology","English","Kannada","Mathematics","electronics"];
const shortWords = words.filter(getShort);
console.log(shortWords);
const longWords = words.filter(getLong);
console.log(longWords);

function getShort(element){
    return element.length <= 7;
}

function getLong(element){
    return element.length > 7;
}

//reduce() method 

//example1

const prices = [100, 12, 25, 75, 24, 89];

const total = prices.reduce(sum);
console.log(`Total Amount : ${total.toFixed(2)}`);

function sum(accumulator, element){
    return accumulator + element;
}

//example2

const grades = [60, 75, 80, 90, 95, 99];

const maximum = grades.reduce(getMax);
console.log(maximum);
const minimum = grades.reduce(getMin);
console.log(minimum);

function getMax(previous, next){
    return Math.max(previous, next);
}

function getMin(previous, next){
    return Math.min(previous, next);
}

//function expression : assign a function to a variable or send it as a value to another fucntion

//example1

const hello = function(){
    console.log("Hello");
}
hello();

//example2

function hello(){
    console.log("Hello");
}

setTimeout(hello, 3000);

//example3

setTimeout(function(){
    console.log("Hello");
}, 3000);

//example4

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function(Element){
    return Math.pow(Element, 2);
})
console.log(squares);

const cubes = numbers.map(function(element){
    return Math.pow(element, 3);
})
console.log(cubes);

const evenNums = numbers.filter(function(element){
    return element % 2 == 0;
})
console.log(evenNums);

const oddNums = numbers.filter(function(element){
    return element % 2 == 1;
})
console.log(oddNums);

const total = numbers.reduce(function(previous, next){
    return previous + next;
})
console.log(total);

//arrow functions : write functions shortly
//(parameters) => some code

//example1

const hello = (name, age) => {console.log(`Hello ${name}`)
console.log(`Hello you are ${age} old`)};
hello("Jeffrey Paulouse",21);
      
//example2

setTimeout(() => console.log("HELLO"), 3000);

//example3

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
console.log(squares);
const cubes = numbers.map((element) => Math.pow(element, 3));
console.log(cubes);
const evenNums = numbers.filter((element) => element % 2 ==0);
console.log(evenNums);
const oddNums = numbers.filter((element) => element % 2 ==1);
console.log(oddNums);
const total = numbers.reduce((accumulator,element) => accumulator + element);
console.log(total);

//objects in javascript

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hi I am spongbob")},
    eat: function(){console.log("I am eating a crabby patty")},
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);

const person2 = {
    firstName: "Patrick",
    lastName: "Starr",
    age: 50,
    isEmployed: false,
    sayHello: function(){console.log("Hey I am Patrick")},
    eat: function(){console.log("I am eating Briyani")},
}

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);

person1.sayHello();
person2.sayHello();
person1.eat();
person2.eat();

//this keyword

const person1 = {
    name: "Jeffrey Paulouse",
    favFood: "KFC",
    sayHello: function(){console.log(`Hi I am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating his favorite food that is ${this.favFood}`)},
}
person1.sayHello();
person1.eat();

const person2 = {
    name: " Patrick Starr",
    favFood: "Pizza",
    sayHello: function(){console.log(`Hi I am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating his favorite food that is ${this.favFood}`)},
}
person2.sayHello();
person2.eat();

//constructors

function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
    this.drive = function(){console.log(`You are driving ${make,model}`)}
}

const car1 = new Car("Ford", "Mustang", 2024, "Blue-Black");
const car2 = new Car("Chevrolet", "Chamero", 2004, "red-silver");
const car3 = new Car("Dodge", "Charger", 2021, "Black-silver");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
car1.drive();

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
car2.drive();

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);
car3.drive();

//classes : structured and cleaner way to work with objects

class product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: Rs.${this.price.toFixed(2)}`);
    }
    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new product("Shirt", 299);
product1.displayProduct();
const total1 = product1.calculateTotal(salesTax);
console.log(`Total Price(with Tax): Rs.${total1.toFixed(2)}`);

const product2 = new product("Pants", 199);
product2.displayProduct();
const total2 = product2.calculateTotal(salesTax);
console.log(`Total Price(with Tax): Rs.${total2.toFixed(2)}`);

const product3 = new product("Shoes", 499);
product3.displayProduct();
const total3 = product3.calculateTotal(salesTax);
console.log(`Total Price(with Tax): Rs.${total3.toFixed(2)}`);

//static Keyword

//example1

class mathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }
    static getCircumference(radius){
        return 2 * this.PI * radius;
    }
    static getArea(radius){
        return this.PI * radius * radius;
    }
}
console.log(mathUtil.PI);
console.log(mathUtil.getDiameter(10));
console.log(mathUtil.getCircumference(10));
console.log(mathUtil.getArea(10));

//example2

class User{
    static userCount = 0;

    constructor(userName){
        this.userName = userName;
        User.userCount++;
    }
    static getUsercount(){
        console.log(`There are ${User.userCount} users online`);
    }
    sayHello(){
        console.log(`My username is ${this.userName}`);
    }
}

const user1 = new User("Jeffrey Paulouse");
console.log(user1.userName);
user1.sayHello();

const user2 = new User("Finny Ebenezer");
console.log(user2.userName);
user2.sayHello();

const user3 = new User("Fanny Evangeline");
console.log(user3.userName);
user3.sayHello();

console.log(User.userCount);
User.getUsercount();

//inherietance

class Animal{
    alive = true;
    eat(){
        console.log(`This ${name} is eating`);
    }
    sleep(){
        console.log(`This ${name} is sleeping`);
    }
}
class Rabbit extends Animal{
    name = "Rabbit";
    run(){
        console.log(`This ${name} is running`);
    }

}
class Fish extends Animal{
    name = "fish";
    swim(){
        console.log(`This ${name} is Swimming`);
    }
}
class Hawk extends Animal{
    name = "Hawk";
    fly(){
        console.log(`This ${name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

rabbit.alive = false;
console.log(rabbit.alive);

rabbit.eat();
rabbit.sleep();
rabbit.run();

fish.eat();
fish.sleep();
fish.swim();

hawk.eat();
hawk.sleep();
hawk.fly();

//super keyword

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    move(speed){
        console.log(`This ${this.name} moves at a speed of ${speed}km/h`);
    }
}
class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }
    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}
class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}
class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }
    fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    }
    
}

const rabbit = new Rabbit("Rabbit", 2, 25);
const fish = new Fish("Fish", 1, 11);
const hawk = new Hawk("Hawk", 3, 60);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
rabbit.run();

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);
fish.swim();

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);
hawk.fly();

//getters and setters method

//example1

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("Width must be a positive number");
        }
    }
    set height(newHeight){
        if(newHeight > 0){
            this._hieght = newHeight;
        }
        else{
            console.error("Height must be a positive number");
        }
    }
    get width(){
        return `${this._width.toFixed(1)}cm`;
    }
    get height(){
        return `${this._hieght.toFixed(1)}cm`;
    }
    get area(){
        return `${(this._width * this._hieght).toFixed(1)}cm^2`;
    }
}

const rectangle = new Rectangle(3,"4");

rectangle.width = 9;
rectangle.height = 6;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

//example2

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newfirstName){
        if(typeof newfirstName == "string" && newfirstName.length > 0){
            this._firstName = newfirstName;
        }
        else{
            console.error("First Name must be a non empty string");
        }
    }
    set lastName(newlastName){
        if(typeof newlastName == "string" && newlastName.length > 0){
            this._lastName = newlastName;
        }
        else{
            console.error("Last Name must be a non empty string");
        }
    }
    set age(newAge){
        if(typeof newAge == "number" && newAge >= 0){
            this._age = newAge;
        }
        else{
            console.error("Age must be a non negative number");
        }
    }
    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }
    get fullName(){
        return this._firstName + " " +  this._lastName;
    }
    get age(){
        return this._age;
    }
}

const person = new Person("Jeffrey", "Paulouse", 21);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);

// destructuring

//example1 swap values of 2 variables

let a = 1;
let b = 2;

[a, b] = [b , a];
console.log(a);
console.log(b);

//example2 swap 2 elements in an array

const colors = ["red", "yellow", "blue", "green", "black"];
[colors[0], colors[4]] = [colors[4], colors[0]];
console.log(colors);

//example3 assign array elements to variables
const colors = ["red", "yellow", "blue", "green", "black"];

const [firstcolor, secondcolor, thirdcolor, ...extracolors] = colors;
console.log(firstcolor);
console.log(secondcolor);
console.log(thirdcolor);
console.log(extracolors);


//example4 extract values from objects

const person1 = {
    firstName: "Jeffrey",
    lastName: "Paulouse",
    age: 22,
    job: "Intern"
}

const{firstName, lastName, age, job} = person1;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

const person2 = {
    firstName: "Finny",
    lastName: "Ebby",
    age: 30,
}

const{firstName, lastName, age, job = "Unemployed"} = person2;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

//example5 destrucure function parameter

function displayPerson({firstName, lastName, age, job = "Unemployed"}){
  console.log(`name: ${firstName} ${lastName}`);
  console.log(`age: ${age}`);
  console.log(`job: ${job}`);
}

const person1 = {
    firstName: "Jeffrey",
    lastName: "Paulouse",
    age: 22,
    job: "Intern"
}

const person2 = {
    firstName: "Finny",
    lastName: "Ebby",
    age: 30,
}

displayPerson(person2);
displayPerson(person1);

//nested Objects

//example1

const person = {
    fullName: "Jeffrey Paulouse",
    age: 22,
    isStudent: false,
    hobbies: ["reading", "gaming", "movies"],
    address: {
        street: "House No. 74, 2nd Main",
        city: "Bangalore",
        country: "India"
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[2]);
console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.country);

for(const property in person.address) {
   console.log(person.address[property]);
}

//example2

class person{

    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{
    
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
    
}

const person1 = new person("Jeffrey", 22, "House No. 74, 2nd Main", "Bangalore", "India");
const person2 = new person("Finny", 30, "House No. 80, 2nd Main", "Bangalore", "India");
const person3 = new person("Fanny", 26, "House No. 54, 2nd Main", "Bangalore", "India");

console.log(person3.address.street);

//array of objects

const fruits = [{name: "apple", color: "red", calories: 60},
               {name: "orange", color: "orange", calories: 50},
               {name: "banana", color: "yellow", calories: 100},
               {name: "coconut", color: "white", calories: 125},
               {name: "watermelon", color: "green", calories: 89}];

fruits.push({name: "grapes", color: "purple", calories: 23});
fruits.pop();
fruits.splice(1, 3);
console.log(fruits);

fruits.forEach(fruits => console.log(fruits.name));

const fruitNames = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);
console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories);

const yellowFruits = fruits.filter(fruit => fruit.color == "yellow");
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
const highCalFruits = fruits.filter(fruit => fruit.calories > 100);
console.log(yellowFruits);
console.log(lowCalFruits);
console.log(highCalFruits);

const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);
console.log(maxFruit);
const minFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit : min);
console.log(minFruit);

//sort()

let fruits = ["apple", "orange", "banana", "coconut" , "pineapple"];
fruits.sort();
console.log(fruits);

let numbers = [6, 7, 4, 3, 5, 1, 2, 8, 9, 10];
numbers.sort((a, b) => a - b);
console.log(numbers);

const people = [{name: "Spongebob", age: 30, gpa: 3.0},
                {name: "Patrick", age: 37, gpa: 2.5},
                {name: "Squidward", age: 61, gpa: 1.5},
                {name: "Sandy", age: 22, gpa: 7.0}]

people.sort((a, b) => a.age - b.age);
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);

//shuffle an array
//Fisher Yates Algorithm

const cards = ['A', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

shuffle(cards);

console.log(cards);

function shuffle(array) {
  for(let i = array.length - 1; i > 0; i--){
    const random = Math.floor(Math.random() * (i + 1));

    [array[i], array[random] = array[random], array[i]];
  }
}

//Date Objects

const date = new Date();
const date1 = new Date(2024, 0, 1, 2, 3, 4, 5);
const date2 = new Date("2024-01-02T12:00:00Z");
const date3 = new Date(170000000);
console.log(date);
console.log(date1);
console.log(date2);

const year = date.getFullYear();
console.log(year);
const month = date.getMonth();
console.log(month);
const day = date.getDate();
console.log(day);
const hour = date.getHours();
console.log(hour);
const minutes = date.getMinutes();
console.log(minutes);
const seconds = date.getSeconds(0);
console.log(seconds);
const dayOfWeek = date.getDay();
console.log(dayOfWeek);

const date = new Date();
date.setFullYear(2099);
date.setMonth(4);
date.setDate(10);
date.setHours(9);
date.setMinutes(10);
date.setSeconds(20);
console.log(date);

const date1 = new Date("2024-07-21");
const date2 = new Date("2024-07-22");
if(date2 > date1) {
    console.log("You got through the day.Finally!");
}

//closure

function outer() {

    let message = "Hello!";

    function inner() {
        console.log(message);
    }
   inner();
}
message = "GoodBye!";
outer();

function createCounter() {
    let count = 0;
function increment() {
    count++;
    console.log(`count increased by ${count}`);
}
function getCount() {
    return count;
}
    return {increment, getCount};
}
const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();

console.log(`The current count is ${counter.getCount()}`);

//setTimeout() function

function sayHello() {
    window.alert("Hello");
}
setTimeout(sayHello,3000);

setTimeout(function(){window.alert("Hello")}, 3000);
setTimeout(() => window.alert("Hello"), 3000);                                                           

//clearTimeout(timeoutId) function

const timeoutId = setTimeout(() => window.alert("Hello"), 3000); 
clearTimeout(timeoutId);

//example program

let timeoutId;

function setTimeout() {
  timeoutId = setTimeout(() => window.alert("Hello"), 3000);
  console.log("Started");
}

function clearTimeout() {
    clearTimeout(timeoutId);
    console.log("Cleared");
}

//ES6 Modules in javascript


import {PI, getCircumference, getArea, getVolume} from './module.js';
console.log(PI);
const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(`${circumference.toFixed(2)}cm^3`);
console.log(`${area.toFixed(2)}cm^3`);
console.log(`${volume.toFixed(2)}cm^3`);

//asynchronous code

function function1(callback) {
    setTimeout(() => {console.log("Task 1");
                      callback()}, 4000);
}

function function2() {
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}
function1(function2);

//error handling
//try {}
//catch {}
//finally {}

try {
    console.log(x);
}

catch(error) {
    console.log(error);
    console.error(error);
}
finally {
    console.log("will excecute");
}
console.log("You have reached the end of the programs");

try {
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));

    if(divisor == 0) {
        throw new Error("You can't divide by 0!");
    }
    if(isNaN(dividend) || isNaN(divisor)) {
        throw new Error("Not a number");
    }

    const result = dividend / divisor;
    console.log(result);
}

catch(error) {
    console.error(error);
}
console.log("END");

//DOCUMENT OBJECT MODEL => DOM

document.getElementById("");

document.title = "My Website";
document.body.style.backgroundColor = "gray";

console.log(document);
console.dir(document);

//example 2

const username = " Jeffrey Paulouse";
const welcomemsg = document.getElementById("welcomemsg");

welcomemsg.textContent += username === "" ? `Guest` : username;

//element selectors

//document.getElementById()  //element or null
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "red";
myHeading.style.textAlign = "center";

console.log(myHeading);

//document.getElementsByClassName() // html collection like array

const fruits = document.getElementsByClassName("fruits");

fruits[0].style.backgroundColor = "red";
fruits[1].style.backgroundColor = "orange";
fruits[2].style.backgroundColor = "yellow";

//example 2

const fruits = document.getElementsByClassName("fruits");

for(let fruit of fruits) {
    fruit.style.backgroundColor = "black";
    fruit.style.color = "white";
}

//example 3

const fruits = document.getElementsByClassName("fruits");
fruits.forEach();

//example 4

const fruits = document.getElementsByClassName("fruits");
Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "black";
    fruit.style.color = "white";
})

//document.getElementsByTagName() //html collection

//example 1

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

h4Elements[0].style.backgroundColor = "red";
for(let h4Element of h4Elements){
    h4Element.style.backgroundColor = "yellow";
}

for(let liElement of liElements) {
    liElement.style.backgroundColor = "orange";
}

//example 2

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = "red";
})

Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = "orange";
})

//document.querySelector() //first element or null

const element = document.querySelector("h1");

element.style.backgroundColor = "yellow";
console.log(element);

//document.querySelectorAll() //Nodelist

const foods =document.querySelectorAll("li");
foods[2].style.backgroundColor = "blue";
console.log(foods);

foods.forEach(food => {
    food.style.backgroundColor = "red";
})

//DOM Navigation

//.firstElementChild

//example 1

const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "red";

//example 2

const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "orange";
})

//.lastElementChild

//example 1
const element = document.getElementById("fruits");
const lasttChild = element.lastElementChild;
lasttChild.style.backgroundColor = "red";

//example 2 

const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "orange";
})

//nextElementSibling

const element = document.getElementById("fruits");
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "red";

//previousElementSibling

const element = document.getElementById("orange");
const prevSibling = element.previousElementSibling;
prevSibling.style.backgroundColor = "red";

//parentElement

const element = document.getElementById("orange");
const parent = element.parentElement;
parent.style.backgroundColor = "blue";

//children

const element = document.getElementById("fruits");
const children = element.children;

Array.from(children).forEach(child => {
    child.style.backgroundColor = "yellow";
})

//Add & change HTML

//step 1 create the element
const newH1 = document.createElement("h1");

//step 2 add attributes and css properties
newH1.textContent = "I like Briyani!";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

//step 3 append element to DOM
document.body.append(newH1);

//step 3 prepend element to DOM
document.body.prepend(newH1);

//step 3 put heading down in box1
document.getElementById("box1").append(newH1);

//step 3 put heading top in box1
document.getElementById("box1").prepend(newH1);

//step 3 sandwich the element between 2 boxes
const box3 = document.getElementById("box3");
document.body.insertBefore(newH1, box3);

//step 3 if elements do not have id's
const boxes = document.querySelectorAll("box");
document.body.insertBefore(newH1, boxes[4]);

//remove an html element
document.getElementById("box1").append(newH1);

document.getElementById("box1").removeChild(newH1);

//ordered list
const newListItem = document.createElement("li");

newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "gray";
document.getElementById("fruits").append(newH1);

// event listeners: mouse event

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", function(event) {
    myBox.style.backgroundColor = "orange";
    myBox.textContent = "Hi";
});

myButton.addEventListener("mouseover", event => {
   myBox.style.backgroundColor = "yellow";
    myBox.textContent = "DON'T DO IT";
})

myButton.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "NOOO";
});

//event listeners: key events

const myBox = document.getElementById("myBox");

document.addEventListener("keydown", event => {
    myBox.textContent = "😊";
    myBox.backgroundColor = "blue";
});

document.addEventListener("keyup", event => {
    myBox.textContent = "🤣";
    myBox.backgroundColor = "lightblue";
});

const moveAmount = 10;
let x = 0;
let y = 0;
document.addEventListener("keydown", event => {

    if(event.key.startsWith("arrow")) {

        event.preventDefault();

        switch(event.key) {
            case "arrowup":
                y -= movement;
                break;
            case "arrowdwon":
                y += movement;
                break;
            case "arrowleft":
                x -= movement;
                break;
            case "arrowright":
                x += movement;
                break;
        }

        myBox.style.top = `${y}px`;
        myBox.style.left = `${y}px`;
    }
});

const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

myButton.addEventListener("click", event => {

    if(myImg.style.visibility == "hidden") {
       myImg.style.visibility = "visible ";
       myButton.textContent = "HIDE";
    }
    else {
    myImg.style.visibility = "hidden";
    myButton.textContent = "SHOW";
    }
});

//node list

let buttons = document.querySelectorAll(".myButtons");

//style and add html and css properties

buttons.forEach(button => {
    button.style.backgroundColor = "blue";
    button.textContent += "😒";
});

//click event listener

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "green";
    });
});

//mouseover and mouseout event listener

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = " purple";
    })
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = " blue";
    })
});

// add an element to nodelist

const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList = "myButtons";
document.body.appendChild(newButton);

buttons = document.querySelectorAll(".myButtons");
console.log(buttons);

//remove an element

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons);
    });
});

*/

//class list

const myButton = document.getElementById("myButton");
const myH1 = document.getElementById("myH1");

/*
myButton.classList.add("enabled");
myButton.classList.remove("enabled");

//add

myButton.addEventListener("mouseover", event => {
    event.target.classList.add("hover");
});

//remove

myButton.addEventListener("mouseout", event => {
    event.target.classList.remove("hover");
});

//toggle

myButton.addEventListener("mouseover", event => {
    event.target.classList.toggle("hover");
});

myButton.addEventListener("mouseout", event => {
    event.target.classList.toggle("hover");
});

//replace

myButton.classList.add("enabled");
myButton.addEventListener("click", event => {
    event.target.classList.replace("enabled", "disabled");
});

//contains()

myH1.classList.add("enabled");
myButton.classList.add("enabled");

myButton.addEventListener("click", event => {
    if(event.target.classlist.contains("disabled")) {
        event.target.textContent += "🤣";
    }
    else {
        event.target.classList.replace("enabled", "disabled");
    }
});

myH1.addEventListener("click", event => {
    if(event.target.classlist.contains("disabled")) {
        event.target.textContent += "🤣";
    }
    else {
        event.target.classList.replace("enabled", "disabled");
    }
});

let buttons = document.querySelectorAll(".myButton");

buttons.forEach(button => {
    button.classList.add("enabled");
});

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button => {
    button.addEventListener("click", event => {
       if(event.target.classlist.contains("disabled")){
        event.target.textContent += "🤣";
    }
    else {
        event.target.classList.replace("enabled", "disabled");
    }
    });
});

*/