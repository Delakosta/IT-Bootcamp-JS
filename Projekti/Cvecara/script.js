let btnIzracunaj = document.getElementById('izracunaj');
let btnResetuj = document.getElementById('resetuj');

let inputRuze = document.getElementById('ruze');
let inputLjiljani = document.getElementById('ljiljani');
let inputGerberi = document.getElementById('gerberi');
let inputPoklon = document.getElementsByName('poklon');

let inputKes = document.getElementById('kes');
let inputKartica = document.getElementById('kartica');

let kontPorudzbina = document.getElementById('kontPorudzbina');
let kontRuze = document.getElementById('kontRuze');
let kontLjiljani = document.getElementById('kontLjiljani');
let kontGerberi = document.getElementById('kontGerberi');
let kontDodatno = document.getElementById('kontDodatno');
let kontCena = document.getElementById('kontCena');

btnIzracunaj.addEventListener(`click`, () => {
    let ruze = inputRuze.value * 150;
    let ljiljani = inputLjiljani.value * 120;
    let gerberi = inputGerberi.value * 70;
    let poklonVr = 0;
    let poklon = "";
    for (let i = 0; i < inputPoklon.length; i++) {
        if (inputPoklon[i].checked) {
            poklonVr += 500;
            poklon += `<p>+ ${inputPoklon[i].value}</p>`;
        }
    }



    kontPorudzbina.innerHTML = `Vaša porudžbina:`
    kontDodatno.innerHTML = poklon;
    kontCena.innerHTML = `Cena je: ${ruze + ljiljani + gerberi + poklonVr}`;
});