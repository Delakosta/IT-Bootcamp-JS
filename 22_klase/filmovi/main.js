import Film from "./film.js";

let film1 = new Film("Cuvari formule", "Dragan Bjelogrlic", 2023);
let film2 = new Film("Klopka", "Srdjan Golubovic", 2007);
let film3 = new Film("Maratonci trce pocasni krug", "Slobodan Sijan", 1982);
let filmovi = [film1, film2, film3];

film1.stampaj();
filmovi[2].stampaj();

console.log(`Ispis for petljom`);

for (let i = 0; i < filmovi.length; i++) {
    filmovi[i].stampaj();
}

console.log(`Ispis forEach petljom`);


filmovi.forEach(film => {
    film.stampaj();
});