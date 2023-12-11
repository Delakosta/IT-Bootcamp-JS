// Zadatak 1
let sati = 1;
let minuti = 15;

let odPonoci = sati * 60 + minuti;
console.log("Minuta od ponoci: " + odPonoci);

// Zadatak 3

let cena = 70;
let novac = 200;

let kusur = novac - cena;
console.log(kusur);


// Zadatak 2

minuti = 30;
ostatak = minuti%60;

console.log("Sata: " + Math.floor (minuti / 60) + " Minuta:" + ostatak);

// Zadatak 6

// Eur u Din
let ukupnoEur = 70;
let kursEur = 117.29;
let ukupnoDin = ukupnoEur * kursEur;
console.log(ukupnoDin);

// Din u Eur
let novacDin = 5000;
novacEur = novacDin / kursEur;
console.log(novacEur);

//Zadatak 7

//Prva konverzija eur -> dol uz pomoc din

let brojEur = 100;
let kursDol = 106.79;

let brojDin = brojEur * kursEur;
let brojDol = brojDin / kursDol;
console.log(brojDol);

// Druga konverzija dol -> eur




// Zadatak 8

let cel = 30;
let far = cel * 1.8 + 32;
console.log("Cel. u far: " + far);

let farCel = (far - 32) / 1.8;
console.log("Far u cel: " + farCel);

// Zadatak 9

let celK = 20;
let kel = celK + 273.15;
console.log("Cel u kelvin: " + kel);

let kelCel = kel - 273.15;
console.log("Kelvin u cel: " + kelCel);

// Zadatak 4

let datum = new Date(); // datum je promenljiva koja sadrzi info o trenutnom datumu i vremenu
let sati4 = datum.getHours();
let minuti4 = datum.getMinutes();

let odPonoci4 = sati4 * 60 + minuti4;
console.log("Minuta od ponoci: " + odPonoci4);

// Zadatak 5

let datum5 = new Date();
let dan5 = datum5.getDate();
let mesec5 = datum5.getMonth() + 1;
let god5 = datum5.getFullYear();

console.log(("0" + dan5).slice(-2) + "." + ("0" + mesec5).slice(-2) + "." + god5 + ".");
console.log(god5 + "/" + ("0" + mesec5).slice(-2) + "/" + ("0" + dan5).slice(-2));