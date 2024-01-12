import Pacijent from "./pacijent.js"

let p1 = new Pacijent("Uros", 182, 80);
let p2 = new Pacijent("Ivan", 179, 75);
let p3 = new Pacijent("Dragan", 180, 92);
let p4 = new Pacijent("Ana", 172, 65);
let p5 = new Pacijent("Vuk", 60, 30);

let pacijenti = [p1, p2, p3, p4, p5]

/////////////////////////////////////////////////

let pacijentSaNajmanjomTezinom = niz => {
    let najmanjaTezina = niz[0].tezina;
    let najmanjaPodaci = niz[0];
    niz.forEach(pacijent => {
        if (pacijent.tezina < najmanjaTezina) {
            najmanjaTezina = pacijent.tezina;
            najmanjaPodaci = pacijent;
        }
    });
    return najmanjaPodaci;
}
pacijentSaNajmanjomTezinom(pacijenti).stampaj();

/////////////////////////////////////////////////

let najvecaBMI = niz => {
    let najveca = 0;
    let najvecaPodaci = niz[0];
    niz.forEach(pacijent => {
        if (pacijent.bmi() > najveca) {
            najveca = pacijent.bmi();
            najvecaPodaci = pacijent;
        }
    });
    return najvecaPodaci;
}
najvecaBMI(pacijenti).stampaj();

/////////////////////////////////////////////////

let sadrziA = niz => {
    for (let i = 0; i < pacijenti.length; i++) {
        if (pacijenti[i].ime.includes("a") || pacijenti[i].ime.includes("A")) {
            pacijenti[i].stampaj();
        }
    }
}
sadrziA(pacijenti);

/////////////////////////////////////////////////

// Napraviti funkciju srednjaVisina kojoj se prosleđuje niz pacijanata a koja određuje i vraća srednju visinu pacijenata.

let srednjaVisina = niz => {
    let suma = 0;
    niz.forEach(pacijent => {
        suma += pacijent.visina; // geter za visinu pacijenta
    });
    return suma / niz.length;
}

console.log(srednjaVisina(pacijenti));