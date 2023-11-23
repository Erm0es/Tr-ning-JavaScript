//let startGameBtn = document.getElementById("startGame-btn");
let messageEl = document.getElementById("message-el");
let sumEL = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

let firstCard = randomCard(2, 11);
let secondCard = randomCard(2, 11);
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
//let sum = 2;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let min;
let max;

function startGame() {
    renderGame()
}

function randomCard(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function renderGame() {

    cardEl.innerHTML = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardEl.innerHTML += cards[i] + ", ";
    }

    sumEL.innerHTML = "Sum: " + sum;

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
}

function newCard() {
    let card = randomCard(2, 11);
    sum += card;
    cards.push(card)
    renderGame();
}


