import generateDeck from "./cardDeck.js";

const playSection = document.getElementById("play");



let displayDeck = () => {
    let deck = generateDeck("easy");
    deck.forEach(card => {
        let cardHolder = document.createElement("div");
        cardHolder.style.backgroundImage = `url(${card.cardImage})`;
        let cardMask = document.createElement("img");
        cardMask.src = "img/rosa-shield.png";
        cardMask.className = card.cardIndex;
        cardHolder.appendChild(cardMask);
        playSection.appendChild(cardHolder);
    });
}

displayDeck();
