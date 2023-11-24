let messageEl = document.getElementById("message-el");
let sumEL = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let newCardBtn = document.getElementById("new-card-btn");
let playerEl = document.getElementById("player-el");

let cards = [];
let sum = 0;

let hasBlackJack = false;
let isAlive = false;
let message = "";

let player = {
    name: "Emelie",
    chips: 245
}

playerEl.innerHTML = player.name + ": $" + player.chips;

function startGame() {
    let firstCard = randomCard()
    let secondCard = randomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    isAlive = true;
    renderGame()
}

function randomCard(cards) {
    let random = Math.floor(Math.random() * 13) + 1;
    if (random === 1) {
        cards = 11;
    } else if (random > 10) {
        cards = 10;
    } else {
        cards = random;
    }
    return random
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
    if(isAlive === true && hasBlackJack === false ){
        let card = randomCard();
        sum += card;
        cards.push(card)
        renderGame();
    }  
}



