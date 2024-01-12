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
            this._tezina = 80;
        }
    }
    get tezina() {
        return this._tezina;
    }
    stampaj() {
        console.log(`Ime: ${this._ime}, Tezina: ${this.tezina}, Visina: ${this.visina}`);
    }
    bmi() {
        return this.tezina / (this.visina / 100) ** 2;
    }
    kritican() {
        let bmi = this.bmi();
        if (bmi < 15 || bmi > 40) {
            return true;
        }
        else {
            return false;
        }
    }
}

export default Pacijent;