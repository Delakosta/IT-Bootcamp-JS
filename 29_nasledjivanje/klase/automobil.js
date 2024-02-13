import Vozilo from "./vozila.js";

export class Automobil extends Vozilo {
    constructor(t, b, rb) {
        super(t, b); // pozivam roditeljski konstruktor
        this.registarskiBroj = rb;
    }
    set registarskiBroj(rb) {
        this._registarskiBroj = rb;
    }
    get registarskiBroj() {
        return this._registarskiBroj;
    }
    ispisiAutomobil() {
        console.log(`Ovo vozilo je automobil, tipa: ${this.tip}, boje: ${this.boja}, registarskog broja: ${this.registarskiBroj}`);
    }
}