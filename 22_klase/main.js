import Auto from "./moduli/auto.js";
import { Film, Pacijent} from "./moduli/vezbanje.js";

let a1 = new Auto("Audi", "bela", true); // a1._marka , a1._boja, a1._imaKrov
console.log(a1);
a1.sviraj();

let a2 = new Auto("Peugeot", "plava", false); // a2._marka , a2._boja, a3._imaKrov
console.log(a2._marka);
console.log(a2._boja);
console.log(a2._imaKrov);
a2.sviraj();

a2.marka = "Citroen"; // Pristupa mu se kao polju, a zapravo se poziva metoda
console.log(a2._marka);

a1.marka = "";
console.log(a1._marka);

//////////////////////////////////////////////////////////////////////////////////////////////

let f1 = new Film("The Godfather", "Albert S. Ruddy", 1972);

f1.stampaj();

//////////////////////////////////////////////////////////////////////////////////////////////

let p1 = new Pacijent("Uros", 182, 84);

console.log(p1);