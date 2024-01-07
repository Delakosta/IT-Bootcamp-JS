let btnIzracunaj = document.getElementById('izracunaj');
let btnResetuj = document.getElementById('resetuj');
let porudzbina = document.getElementById('porudzbina');
let inputRuze = document.getElementById('ruze');
let inputLjiljani = document.getElementById('ljiljani');
let inputGerberi = document.getElementById('gerberi');
let inputPoklon = document.getElementsByName('poklon');
let inputKartica = document.getElementById('kartica');
let kontPorudzbina = document.getElementById('kontPorudzbina');
let kontRuze = document.getElementById('kontRuze');
let kontLjiljani = document.getElementById('kontLjiljani');
let kontGerberi = document.getElementById('kontGerberi');
let kontDodatno = document.getElementById('kontDodatno');
let kontCena = document.getElementById('kontCena');


btnIzracunaj.addEventListener(`click`, () => {
    if (inputRuze.value > 0 || inputLjiljani.value > 0 || inputGerberi.value > 0) {
        let ruze = "";
        let ljiljani = "";
        let gerberi = "";
        for (let i = 0; i < inputRuze.value; i++) {
            ruze += `<img src= "img/ruza.png">`;
        }
        for (let i = 0; i < inputLjiljani.value; i++) {
            ljiljani += `<img src= "img/ljiljan.png">`;
        }
        for (let i = 0; i < inputGerberi.value; i++) {
            gerberi += `<img src= "img/gerber.png">`;
        }
        let ruzeCena = inputRuze.value * 150;
        let ljiljaniCena = inputLjiljani.value * 120;
        let gerberiCena = inputGerberi.value * 70;
        let poklonCena = 0;
        let poklon = "<h3>Dodatno:</h3>";
        for (let i = 0; i < inputPoklon.length; i++) {
            if (inputPoklon[i].checked) {
                poklonCena += 500;
                poklon += inputPoklon[i].value;
            }
        }
        if (poklonCena == 0) {
            poklon = ""
        }
        let ukupnaCena = ruzeCena + ljiljaniCena + gerberiCena + poklonCena;
        let cena = "";
        if (ukupnaCena > 2000 && inputKartica.checked) {
            cena = `<p>Cena bez popusta je ${ukupnaCena} RSD.</p><h2>Cena sa popustom je ${ukupnaCena * 0.9} RSD.</h2>`;
        }
        else {
            cena = `<p>Ukupna cena je ${ukupnaCena} RSD.`;
        }
        porudzbina.style.display = "block";
        kontPorudzbina.innerHTML = `<h2>Vaša porudžbina:</h2>`
        kontRuze.innerHTML = ruze;
        kontLjiljani.innerHTML = ljiljani;
        kontGerberi.innerHTML = gerberi;
        kontDodatno.innerHTML = poklon;
        kontCena.innerHTML = cena;
        porudzbina.scrollIntoView();
    }
    else {
        alert(`Morate odabrati minimum jedan cvet`);
    }
});

btnResetuj.addEventListener('click', () => {
    window.location.reload();
});