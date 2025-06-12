//NUMBER GUESSING GAME

const  minNum = 90;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
console.log(answer);

let attempts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`Guess the number between ${minNum} and ${maxNum}`);
    guess = Number(guess);
    
    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if (guess < minNum || guess > maxNum){
       window.alert("Please enter a number within the specific range");
    }
    else{
        attempts++;
        if(guess < answer)
        {
            window.alert("too low! try again.")
        }
        else if(guess > answer)
        {
            window.alert("too high! try again.")
        }
        else{
            window.alert(`The answer was ${answer}. It took you ${attempts} attempts`);
        }
    
    running = false;
}
}