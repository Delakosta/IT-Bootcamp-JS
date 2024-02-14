import { Osoba, Zaposleni } from "./zaposleni.js";
import Kosarkas from "./sportista.js";

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

/////////////////////////////////////////////////////////////////////////////////////////////

let k1 = new Kosarkas("Mikica", "Djordjevic", 1972, "Leskovac", [10, 2, 15, 32, 23, 5, 3, 25]);
let k2 = new Kosarkas("Milos", "Ristic", 1985, "Nis", [1, 2, 25, 12, 23, 7, 3, 35]);
let k3 = new Kosarkas("Djordje", "Ilic", 1989, "Pirot", [11, 22, 21, 43, 5, 32, 15]);
let k4 = new Kosarkas("Nikola", "Simonovic", 1995, "Prokuplje", [16, 2, 5, 15, 23, 29]);
let k5 = new Kosarkas("Igor", "Mitrovic", 1991, "Krusevac", [11, 21, 43, 32, 23, 5, 53, 25, 22, 56, 11]);

let kosarkasi = [k1, k2, k3, k4, k5];

let najviseUtakmica = niz => {
    let najvise = niz[0].poeni.length;
    let najviseKosarkas = "";
    niz.forEach(kosarkas => {
        if (kosarkas.poeni.length > najvise) {
            najvise = kosarkas.poeni.length;
            najviseKosarkas = kosarkas;
        }
    });
    return najviseKosarkas;
}
console.log(najviseUtakmica(kosarkasi));

let najvisePoena = niz => {
    let maxKosarkas = "";
    let maxPoeni = 0;
    niz.forEach(kosarkas => {
        kosarkas.poeni.forEach(utakmica => {
            if (utakmica > maxPoeni) {
                maxPoeni = utakmica;
                maxKosarkas = kosarkas;
            }
        });
    });
    return maxKosarkas;
}
console.log(najvisePoena(kosarkasi));

let najviseProsecnoPoena = niz => {
    let najvise = 0;
    let najviseKosarkas = "";
    niz.forEach(kosarkas => {
        if (kosarkas.prosekPoena() > najvise) {
            najvise = kosarkas.prosekPoena();
            najviseKosarkas = kosarkas;
        }
    });
    return najviseKosarkas;
}
console.log(najviseProsecnoPoena(kosarkasi));