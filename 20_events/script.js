// 1. Dohvatiti element na koji zelimo da postavimo osluskivac
let btnHello = document.getElementById('hello');

// 2 . Postavimo osluskivac na element koji smo dohvatili
btnHello.addEventListener('click', () => {
    console.log(`Hello!`);
});

btnHello.addEventListener('dblclick', () => {
    console.log(`Hello hello!!`);
});

// Zadatak 1 / 2 - Napraviti dugme klikom na koje se u konzoli ispisuje vrednost brojača br. 
// Brojač na početku ima vrednost 1, a svaki put kada se klikne na dugme povećati vrednost brojača za 1.

let btnBroj = document.getElementById('broji');
let pBroj = document.getElementById('ispisBroja');
let br = 1;

btnBroj.addEventListener('click', () => {
    console.log(`Broj je: ${br}`);
    pBroj.innerHTML = `Broj je: ${br}`;
    br++;
});


// Zadatak 3 - Napraviti dugme + i dugme -. 
// Kada se klikne na dugme +, na ekranu prikazati vrednost brojača povećanu za 1.
// Kada se klikne na dugme -, na ekranu prikazati vrednost brojača smanjenu za 1.

let btnPlus = document.getElementById('plus');
let btnMinus = document.getElementById('minus');
let brojac = document.getElementById('brojac');
br = 0;

btnPlus.addEventListener('click', ( )=> {
    br++;
    brojac.innerHTML = `${br}`;
});
btnMinus.addEventListener('click', ( )=> {
    if (br > 0) {
        br--;
        brojac.innerHTML = `${br}`;
    }
});

// Zadatak 5 - Napraviti input polje i dugme.
// U input polje treba da se unese ime neke osobe, a na ekranu u paragrafu da se ispiše Zdravo i ime osobe preuzeto iz input polja.

let btnIspisiTekst = document.getElementById('ispisiTekst');
let pIspisTeksta = document.getElementById('ispisTeksta');
let inputTekst = document.getElementById('tekst');

btnIspisiTekst.addEventListener('click', () => {
    let preuzmiTekst = inputTekst.value;
    pIspisTeksta.innerHTML = `Zdravo ${preuzmiTekst}`;
});