//let startGameBtn = document.getElementById("startGame-btn");
let messageEl = document.getElementById("message-el");
let sumEL = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");


let firstCard = randomNum(2, 11);
let secondCard = randomNum(2, 11);
let sum = firstCard + secondCard;

//let sum = 2;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let min;
let max;

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function startGame() {
    if (sum < 21) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "BLACKJACK!";
        hasBlackJack = true;
    } else if (sum > 21) {
        message = "You lose.";
        isAlive = false;
    }
    else {
        message = "Something went wrong"
    }
    messageEl.innerHTML = message;
    cardEl.innerHTML = "Cards: " + firstCard + ", " + secondCard;
    sumEL.innerHTML = "Sum: "+ sum;
}

function newCard(){
    console.log("RENDERING CARD");
}


