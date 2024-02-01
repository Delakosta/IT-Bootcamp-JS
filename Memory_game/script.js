import generateDeck from "./cardDeck.js";

const gameBoard = document.getElementById("gameBoard");
let difficulty = document.querySelector('input[name= "diff"]:checked').value;

let displayDeck = () => {
    let deck = generateDeck(difficulty);
    deck.forEach(card => {
        let cardContainer = document.createElement("div");
        cardContainer.classList.add("card", `card-${card.cardIndex}`);

        let cardFront = document.createElement("img");
        cardFront.src = card.cardFront;
        cardFront.classList.add("front");

        let cardBack = document.createElement("img");
        cardBack.src = card.cardBack;
        cardBack.classList.add("back");

        cardContainer.append(cardFront, cardBack);
        gameBoard.appendChild(cardContainer);
    });
}

displayDeck();