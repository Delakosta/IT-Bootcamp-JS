class Sportista {
    constructor(i, p, god, grad) {
        this.ime = i;
        this.prezime = p;
        this.godinaRodjenja = god;
        this.gradRodjenja = grad;
    }
    set ime(i) {
        this._ime = i;
    }
    get ime() {
        return this._ime;
    }
    set prezime(p) {
        this._prezime = p;
    }
    get prezime() {
        return this._prezime;
    }
    set godinaRodjenja(god) {
        this._godinaRodjenja = god;
    }
    get godinaRodjenja() {
        return this._godinaRodjenja;
    }
    set gradRodjenja(grad) {
        this._gradRodjenja = grad;
    }
    get gradRodjenja() {
        return this._gradRodjenja;
    }
}

class Kosarkas extends Sportista {
    constructor(i, p, god, grad, poeni) {
        super(i, p, god, grad);
        this.poeni = poeni;
    }
    set poeni(poeni) {
        this._poeni = poeni;
    }
    get poeni() {
        return this._poeni;
    }
    prosekPoena() {
        let suma = 0;
        this.poeni.forEach(utakmica => {
            suma +=  utakmica;
        });
        return suma / this.poeni.length;
    }
}

export default Kosarkas;
