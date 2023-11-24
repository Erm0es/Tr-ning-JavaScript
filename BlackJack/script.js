//let startGameBtn = document.getElementById("startGame-btn");
let messageEl = document.getElementById("message-el");
let sumEL = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

let cards = [];
let sum = 0;

let hasBlackJack = false;
let isAlive = false;
let message = "";

function startGame() {
    let firstCard = randomCard()
    let secondCard = randomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    isAlive = true;
    renderGame()
    return cards,sum,isAlive;
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
    let card = randomCard(2, 11);
    sum += card;
    cards.push(card)
    renderGame();
}


