import Vozilo from "./vozila.js";

export class Kamion extends Vozilo {
    constructor(t, b, n) {
        super(t, b);
        this.tezina = n;
    }
    set nosivost(n) {
        this._nosivost = n;
    }
    get nosivost() {
        return this._nosivost;
    }
    voziKamion() {
        console.log(`Kamion:`);
        this.vozi();
    }
}