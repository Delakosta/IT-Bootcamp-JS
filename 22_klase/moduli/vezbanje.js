class Film {
    constructor(n, r, g) {
        this.naslov = n;
        this.reziser = r;
        this.godinaIzdanja = g;
    }
    stampaj() {
        console.log(this.naslov);
    }
    set naslov(n) {
        this._naslov = n;
    }
    get naslov() {
        return this._naslov;
    }
    set reziser(r) {
        this._reziser = r;
    }
    get reziser() {
        return this._reziser;
    }
    set godinaIzdanja(g) {
        if (g > 1800) {
            this._godinaIzdanja = g;
        }
        else {
            this._godinaIzdanja = 1800;
        }
    }
    get godinaIzdanja() {
        return this._godinaIzdanja;
    }

}

class Pacijent {
    constructor(i, v, t) {
        this.ime = i;
        this.visina = v;
        this.tezina = t;
    }
    set ime(i) {
        this._ime = i;
    }
    get ime() {
        return this._ime;
    }
    set visina(v) {
        if (v >= 0 && v <= 250) {
            this._visina = v;
        }
        else {
            this._visina = 180;
        }
    }
    get visina() {
        return this._visina;
    }
    set tezina(t) {
        if (t >= 0 && t <= 550) {
            this._tezina = t;
        }
        else {
            this._tezina = 70;
        }
    }
    get tezina() {
        return this._tezina;
    }
}




export { Film, Pacijent };