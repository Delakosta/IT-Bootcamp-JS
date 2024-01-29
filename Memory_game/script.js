import generateDeck from "./cardDeck.js";

const playSection = document.getElementById("playSection");


let displayDeck = () => {
    let deck = generateDeck("expert");
    deck.forEach(card => {
        let img = document.createElement("img");
        img.src = card.cardImage;
        img.alt = "Card";
        play.appendChild(img);
    });
}

displayDeck();