const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCard = document.getElementById("masterCard");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function() {
    
    if(myCheckbox.checked) {
        subResult.textContent = "You are Subscribed";
    }
    else {
        subResult.textContent = `You are not Subscribed`;
    }
    if(visaBtn.checked) {
        paymentResult.textContent = `You are paying with visa`;
    }
    else if(masterCard.checked) {
        paymentResult.textContent = `You are paying with visa`;
    }
    else if(paypalBtn.checked) {
        paymentResult.textContent = `You are paying with visa`;
    }
    else {
        paymentResult.textContent = `you must select a payment type`;
    }
}