//15

let t = 25;

if (t < -15 || t > 40) {
    console.log("Ekstremna temperatura")
} else {
    console.log("Nije ekstremna temperatura")
}

// 2 nacin

if (t >= -15 && t <= 40) {
    console.log("Nije ekstremna temperatura")
} else {
    console.log("Ekstremna temperatura")
}

/*Ispitati da li je trenutna godina prestupna. (godinu preuzeti iz vremena na Vašem računaru).Godina je prestupna ako je deljiva sa 4 i nije deljiva sa 100 ili ako je deljiva sa 400.*/

let datum = new Date();
let god = datum.getFullYear();

if (god % 4 == 0 && god % 100 !== 0) {
    console.log("Godina je prestupna");
} else {
    console.log("Godina nije prestupna");
}

/*Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara, ispitati “otvoreno” ukoliko je butik trenutno otvoren.
U suprotnom ispisati “zatvoreno”.
(Ko bude imao vremena: Ukoliko je butik trenutno otvoren, prikazati sličicu otvorenih vrata na ekranu. Ukoliko je butik trenutno zatvoren, prikazati sličicu zatvorenih vrata.)*/

let dan = datum.getDay();
let vreme = datum.getHours();

if (vreme > 20 || vreme < 9) {
    console.log("Zatvoreno");
    document.write("<img src='https://static.thenounproject.com/png/759739-200.png'>");
} else if ((dan === 6 || dan === 0) && (vreme > 18 || vreme < 10)) {
    console.log("Zatvoreno");
    document.write("<img src='https://static.thenounproject.com/png/759739-200.png'>");
} else {
    console.log("Otvoreno");
    document.write("<img src='https://static.vecteezy.com/system/resources/thumbnails/015/771/633/small/two-opened-doors-concept-colorful-outline-icon-vector.jpg'>");
}

/*Odrediti i u paragrafu ispisati najveći od tri uneta broja:
a) Samo uz pomoć if naredbi (bez korišćenja if-else strukture, logičkih operatora ili ugnježdenog grananja)
b) Korišćenjem if – else strukture
c) Korišćenjem ugnježdenog grananja.
d) Korišćenjem logičkih operatora*/

let a = 45;
let b = 44;
let c = 52;

//d

if (a > b && a > c) {
    console.log("Najveci broj sadrzi promenljiva a");
} else if (b > a && b > c) { 
    console.log("Najveci broj sadrzi promenljiva b");
} else {
    console.log("Najveci broj sadrzi promenljiva c");
}

//c

if (a > b) {
    if (a > c) {
        console.log("Najveci broj sadrzi promenljiva a");
    } else {
        console.log("Najveci broj sadrzi promenljiva c");
    }
}
else if (b > c) {
        console.log("Najveci broj sadrzi promenljiva b")
}
else {
    console.log("Najveci broj sadrzi promenljiva c");
}


//a

let maks = a;

if (b > maks) {
    maks = b;
}
if (c > maks) {
    maks = c;
}
console.log("Najveci od brojeva je: " + maks);

//b

