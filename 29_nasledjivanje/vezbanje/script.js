import { Osoba, Zaposleni } from "./zaposleni.js";

let z1 = new Zaposleni("Uros", "Kostadinovic", 1989, 50000, "Administrator");
let z2 = new Zaposleni("Ana", "Kostadinovic", 1993, 70000, "Nastavnik");
let z3 = new Zaposleni("Snezana", "Kostadinovic", 1962, 60000, "Ekonomista");
let z4 = new Zaposleni("Ivan", "Kostadinovic", 1994, 90000, "Kontrolor");
let z5 = new Zaposleni("Vuk", "Kostadinovic", 2018, 72000, "Vrtic");

let radnici = [z1, z2, z3, z4, z5];

let ekonomista = zap => {
    if (zap.pozicija == "Ekonomista") {
        console.log("Zaposlen u ekonomskom sektoru.");
    }
}
ekonomista(z3);

let prosekPlate = niz => {
    let suma = 0;
    niz.forEach(radnik => {
        suma += radnik.plata;
    });
    return suma / niz.length;
}
console.log(prosekPlate(radnici)); 

let natprosecnaPlata = (zap, niz) => {
    let prosek = prosekPlate(niz);
    if (zap.plata > prosek) {
        return true;
    }
    else {
        return false;
    }
}
console.log(natprosecnaPlata(z4, radnici));