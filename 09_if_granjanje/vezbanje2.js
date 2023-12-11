/*Preuzeti sa računara koji je dan u nedelji i ispitati da li je to radni dan 
ili je u pitanju vikend.*/

let datum = new Date();
let dan = datum.getDay();

if (dan == 0) {
    console.log("Vikend");
} else if (dan == 6) {
    console.log("Vikend");
} else {
    console.log("Radni dan");
}

/*Za vreme preuzeto sa računara ispisati 
dobro jutro za vreme manje od 12 sati ujutru, 
dobar dan za vreme manje od 18 sati,
u ostalim slučajevima ispisati dobro veče.*/

let vreme = datum.getHours();

if (vreme <= 12) {
    console.log("Dobro jutro");
} else if ( vreme <= 18) {
    console.log("Dobar dan");
} else {
    console.log("Dobro vece");
}

/*Radno vreme jedne programerske firme je od 9h do 17h. 
Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi.*/

if (vreme >= 17) {
    console.log("Firma ne radi");
} else if (vreme < 9) {
    console.log("Firma ne radi");
} else {
    console.log("Firma radi");
}

/*Za unet sat početka i sat kraja radnog vremena dva lekara,  
ispisati DA ukoliko se smene lekara preklapaju, 
u suprotnom ispisati NE.*/

let smena1Start = 15;
let smena1Stop = 22;

let smena2Start = 7;
let smena2Stop = 12;

if (smena1Stop <= smena2Start) {
    console.log("NE");
} else if (smena2Stop <= smena1Start) {
    console.log("NE");
} else {
    console.log("DA"); 
}

/*Uneti dva broja. Većem  broju ispisati sledbenik, a manjem broju ispisati prethodnik.*/

let br1 = 5;
let br2 = 7;

if (br1 > br2) {
    console.log("Broj 1: " + ++br1);
    console.log("Broj 2: " + --br2);
} else if (br1 < br2) {
    console.log("Broj 1: " + --br1);
    console.log("Broj 2: " + ++br2);
} else {
    console.log("Brojevi su jednaki");
}

/*Učitati broj ispitati na ekranu “Ceo broj”, ukoliko je učitani broj ceo.*/

let x = 15.15;

if (x%1 == 0) {
    console.log("Ceo broj");
} else {
    console.log("Nije ceo broj");
}

/*U promenljivu uneti broj koji predstavlja temperaturu vazduha. 
Na ekranu ispisati „ekstremna temperatura“ ukoliko je temperatura manja od -15 stepeni Celzijusovih ili veća od 40 stepeni Celzijusovih.*/

let temp = 21;

if (temp < -15 || temp > 40) {
    console.log("Ekstremna temperatura")
}

/*Ispitati da li je trenutna godina prestupna. (godinu preuzeti iz vremena na Vašem računaru).Godina je prestupna ako je deljiva sa 4 i nije deljiva sa 100 ili ako je deljiva sa 400.*/

let god = 2023;

if (god % 4 === 0 && god % 100 !== 0) {
    console.log("Godina je prestupna");
} else {
    console.log("Godina nije prestupna");
}

/*Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara, ispitati “otvoreno” ukoliko je butik trenutno otvoren.
U suprotnom ispisati “zatvoreno”.
(Ko bude imao vremena: Ukoliko je butik trenutno otvoren, prikazati sličicu otvorenih vrata na ekranu. Ukoliko je butik trenutno zatvoren, prikazati sličicu zatvorenih vrata.)*/

if (vreme > 20 || vreme < 9) {
    console.log("Zatvoreno");
    document.write("<img src='https://static.thenounproject.com/png/759739-200.png'>")
} else if ((dan === 0 || dan === 6) && (vreme > 18 || vreme < 10)) {
    console.log("Zatvoreno");
    document.write("<img src='https://static.thenounproject.com/png/759739-200.png'>")
} else {
    console.log("Otvoreno");
    document.write("<img src='https://static.vecteezy.com/system/resources/thumbnails/015/771/633/small/two-opened-doors-concept-colorful-outline-icon-vector.jpg'>")
}

/*Odrediti i u paragrafu ispisati najveći od tri uneta broja:
a) Samo uz pomoć if naredbi (bez korišćenja if-else strukture, logičkih operatora ili ugnježdenog grananja)
b) Korišćenjem if – else strukture
c) Korišćenjem ugnježdenog grananja.
d) Korišćenjem logičkih operatora*/


let a = 35;
let b = 28;
let c = 30;

//d)

if (a > b && a > c) {
    let paragraf = document.getElementById('p1');
    paragraf.innerHTML = "Najveci broj ima promenljiva a";
}
if (c > b && c > a) {
    paragraf = document.getElementById('p1');
    paragraf.innerHTML = "Najveci broj ima promenljiva c";
}
if (b > a && b > c) {
    paragraf = document.getElementById('p1');
    paragraf.innerHTML = "Najveci broj ima promenljiva b";
}

//c)

if (a > b) {
    if (a > c) {
        paragraf = document.getElementById('p2');
        paragraf.innerHTML = "Najveci broj ima promenljiva a";
    }
}
if (b > a) {
    if (b > c) {
        paragraf = document.getElementById('p2');
        paragraf.innerHTML = "Najveci broj ima promenljiva b";
    }
}
if (c > b) {
    if (c > a) {
        paragraf = document.getElementById('p2');
        paragraf.innerHTML = "Najveci broj ima promenljiva c";
    }
}
