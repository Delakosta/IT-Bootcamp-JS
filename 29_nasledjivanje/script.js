import Vozilo from "./klase/vozila.js";
import {Automobil}   from "./klase/automobil.js";
import { Kamion } from "./klase/kamion.js";

let v1 = new Vozilo("Vazdusno", "bela");

v1.ispisiVozilo();
v1.vozi();

let a1 = new Automobil("Drumsko", "teget", "NI111CC");

a1.ispisiVozilo();
a1.ispisiAutomobil();


let k1 = new Kamion("drumsko", "siva", 25);
console.log(k1.boja);
k1.vozi();
k1.voziKamion();