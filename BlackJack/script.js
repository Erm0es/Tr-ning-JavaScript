
let min;
let max;

function randomNum(min,max){
    return Math.floor(Math.random() * (max - min) + min)
}

let firstCard = randomNum(2,11);
let secondCard = randomNum(2,11);
let sum = firstCard + secondCard;

//let sum = 23;
let hasBlackJack = false;
let isAlive = true;
let message = "";

if(sum < 21) {
    message = "your sum is: " + sum + ". Do you want to draw a new card?";
} else if (sum === 21){
    message = "Your sum is: " + sum + " BLACKJACK!";
    hasBlackJack = true;
}else if(sum > 21){
    message = "Your sum is: " + sum + " You lose :(";
    isAlive = false;
}
else{
    message = "Something went wrong"
}


console.log(hasBlackJack)
console.log(isAlive)
console.log(message)

