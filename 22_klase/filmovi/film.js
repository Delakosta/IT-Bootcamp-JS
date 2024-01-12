class Film {
    constructor (n, r, g) {
    this.naslov = n;
    this.reziser = r;
    this.godinaIzdanja = g;
    }
    // Seteri - daju vrednost polja
    set naslov(n) {
        this._naslov = n;
    }
    set reziser(r) {
        this._reziser = r;
    }
    set godinaIzdanja(g) {
        if (g < 1800) {
            this._godinaIzdanja = 1800;
        }
        else {
            this._godinaIzdanja = g;
        }
    }
    // Geteri - vraca vrednost polja
    get naslov() {
        return this._naslov;
    }
    get reziser() {
        return this._reziser;
    }
    get godinaIzdanja() {
        return this._godinaIzdanja;
    }
    stampaj() {
        console.log(`Naslov: ${this.naslov}`);
    }
}

export default Film;

/*
let film1 = new Film("Cuvari formule", "Dragan Bjelogrlic", 2023);
let film2 = new Film("Klopka", "Srdjan Golubovic", 2007);
console.log(film1);
console.log(film2);
film1.stampaj();
film1.godinaIzdanja = 2024;
console.log(film1);
console.log(`Film: ${film2.naslov} Godina izdanja: ${film2.godinaIzdanja}`);
*/


