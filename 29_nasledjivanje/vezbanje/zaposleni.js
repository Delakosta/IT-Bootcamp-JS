class Osoba {
    constructor(i, p, g) {
        this.ime = i;
        this.prezime = p;
        this.godinaRodjenja = g;
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
    set godinaRodjenja(g) {
        this._godinaRodjenja = g;
    }
    get godinaRodjenja() {
        return this._godinaRodjenja;
    }
    ispisOsobe() {
        console.log(`Ime: ${this.ime}, Prezime: ${this.prezime}, Godina rodjenja: ${this.godinaRodjenja}`);
    }
}

class Zaposleni extends Osoba {
    constructor(i, p, g, pl, po) {
        super(i, p, g);
        this.plata = pl;
        this.pozicija = po;
    }
    set plata(pl) {
        this._plata = pl;
    }
    get plata() {
        return this._plata;
    }  
    set pozicija(po) {
        this._pozicija = po;
    }
    get pozicija() {
        return this._pozicija;
    }
    ispisZaposlenog() {
        this.ispisOsobe();
        console.log(`Plata: ${this.plata}, Pozicija: ${this.pozicija}`);
    }
}

export { Osoba, Zaposleni};