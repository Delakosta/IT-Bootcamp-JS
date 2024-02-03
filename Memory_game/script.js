import generate from "./cards.js";

const btnStart = document.getElementById('start');
const gameBoard = document.getElementById("gameBoard");
const timerBlock = document.getElementById('timer');
let user = document.getElementById('user');

let deck = [];
let timer = null;

btnStart.addEventListener("click", () => {
    const difficulty = document.querySelector('input[name="diff"]:checked').value;
    deck = generate(difficulty);
    if (user.value.trim() != "") {
        btnStart.style.display = "none";
        display();
        play();
        timer = setInterval(() => {
            timerBlock.textContent++;
        }, 1000);
    }
    else {
        alert("Enter username!");
    }
});

const display = () => {
    deck.forEach((card, index) => {
        let cardHolder = document.createElement("div");
        cardHolder.classList.add("holder", `ind${index}`);

        let cardFront = document.createElement("img");
        cardFront.src = card.cardFace;
        cardFront.classList.add("front");

        let cardBack = document.createElement("img");
        cardBack.src = card.cardBack;
        cardBack.classList.add("back");

        cardHolder.append(cardFront, cardBack);
        gameBoard.appendChild(cardHolder);
    });
};

const play = () => {
    let revealedCards = [];
    let matchedPairs = 0;
    let isFlipping = false;

    gameBoard.addEventListener("click", (e) => {
        // Check if the clicked element is a card and if flipping is currently in progress
        if (!e.target.classList.contains("back") || isFlipping) {
            return;
        }

        let clickedCard = e.target.parentElement;
        let clickedCardIndex = clickedCard.classList[1];

        // Check if the revealed cards array is not full and the clicked card is not already revealed
        if (
            revealedCards.length < 2 &&
            !revealedCards.includes(clickedCardIndex)
        ) {
            // Reveal the clicked card and add its index to the revealed cards array
            clickedCard.classList.add("revealed");
            revealedCards.push(clickedCardIndex);

            // Check if two cards are revealed
            if (revealedCards.length === 2) {
                isFlipping = true;

                // Extract numeric indices from the revealed cards array
                const [firstCardIndex, secondCardIndex] = revealedCards.map(indexString => parseInt(indexString.slice(3), 10));

                // Get references to the first and second cards
                const firstCard = document.querySelector(`.ind${firstCardIndex}`);
                const secondCard = document.querySelector(`.ind${secondCardIndex}`);

                // Check if the two revealed cards match
                if (
                    deck[firstCardIndex].cardFace === deck[secondCardIndex].cardFace
                ) {
                    // Update matched pairs count and check for a win
                    matchedPairs++;
                    if (matchedPairs === deck.length / 2) {
                        setTimeout(() => {
                            alert("Congratulations! You won!");
                            let result = {
                                user: user.value,
                                time: timerBlock.textContent
                            }
                            localStorage.setItem("name", JSON.stringify(result));
                            clearInterval(timer);
                            gameBoard.removeEventListener('click');
                        }, 1000)
                    }
                } else {
                    // Flip the cards back after a delay if they don't match
                    setTimeout(() => {
                        firstCard.classList.remove("revealed");
                        secondCard.classList.remove("revealed");
                    }, 1000); // Adjust the duration as needed
                }

                // Reset the revealed cards array and flipping flag after processing the pair
                revealedCards = [];
                setTimeout(() => {
                    isFlipping = false;
                }, 1000); // Adjust the duration as needed
            }
        }
    });
};