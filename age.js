
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function() {
age = myText.value;
age = Number(age);
if(age >= 1000){
    resultElement.textContent = `You are too old to be alive`;
}
else if(age == 0){
    resultElement.textContent = `CONGRATULATIONS YOU WERE JUST BORN`;
}
else if(age >= 18){
 resultElement.textContent = `You are old enough to enter this site`;
}
else if(age < 0) {
resultElement.textContent = `you cannot be below 0 years old`;
}
else{
resultElement.textContent = `You must be 18+ to enter this site`;
}
}

