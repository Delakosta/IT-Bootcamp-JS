let auto1 = {
    marka: "Nissan",
    km: 220453,
    godiste: 1999,
    vlasnici: ["Milan", "Dragan", "Uros"]
};
let auto2 = {
    marka: "VW",
    km: 190500,
    godiste: 2001,
    vlasnici: ["Pera", "Mika", "Zoran"]
};
let auto3 = {
    marka: "Audi",
    km: 220721,
    godiste: 2007,
    vlasnici: ["Mirko", "Lazar", "Nikola"]
};
let auto4 = {
    marka: "BMW",
    km: 155000,
    godiste: 2005,
    vlasnici: ["Dusan", "Miodrag", "Darko"]
};
let auto5 = {
    marka: "Peugot",
    km: 120300,
    godiste: 2015,
    vlasnici: ["Marko", "Lazar", "Filip"]
};

let automobili = [auto1, auto2, auto3, auto4, auto5];

/////////////////////////////////////////////////////////////////////////////

/* Napisati funkciju prosecnoGodiste kojoj se prosleđuje niz automobila, a koja
vraća prosečno godište proizvodnje automobila.
Ukoliko je prosečno godište automobila realan broj, zaokružiti ga na donji ceo
deo*/

let prosecnoGodiste = niz => {
    let suma = 0;
    niz.forEach(auto => {
        suma += auto.godiste;
    });
    return (suma / niz.length).toFixed(0);
}

console.log(prosecnoGodiste(automobili));

/* Napisati funkciju markaNajmanjeKm kojoj se prosleđuje niz automobila kao i
marka automobila, a koja vraća automobil (objekat) sa zadatom markom, a koji je
prešao najmanje kilometara.
Ukoliko nema automobila sa datom markom, kao rezultat vratiti null.
Ukoliko ima tačno jedan automobil sa datom markom, vratiti taj automobil.
Ukoliko ima više automobila sa datom markom koji su prešli isti broj kilometara,
vratiti najskorije proizveden takav automobil. Ukoliko, pak, ima i više takvih
automobila, vratiti bilo koji od njih.*/


let markaNajmanjeKm = (niz, marka) => {
    let a = [];
    niz.forEach(auto => {
        if (auto.marka == marka) {
            a = auto;
        }
    return a;
    });
}

console.log(markaNajmanjeKm(automobili, "Audi"));

/* Napisati funkciju prosekKm10 kojoj se prosleđuje niz automobila, a koja vraća
prosečnu pređenu kilometražu svih automobila ne starijih od 10 godina. */

let prosekKm10 = niz => {
    let datum = new Date();
    let god = datum.getFullYear();
    let suma = 0;
    let br = 0;
    niz.forEach(auto => {   
        if (god - auto.godiste < 10) {
            suma += auto.km;
            br++;   
        }
    });
    return suma / br;
}

console.log(prosekKm10(automobili));

/* Napisati funkciju rokfeler kojoj se prosleđuje niz automobila kao i ime vlasnika, a
koja vraća true ukoliko postoji vlasnik sa zadatim imenom koji je u svom
vlasništvu posedovao više od dva automobila, a u suprotnom vraća false */

let rokfeler = (niz, ime) => {
    let rok = false;
    niz.forEach(auto => {
        auto.vlasnici.forEach(vlasnik => {
                auto.vlasnici.forEach(vlasnik2 => {
                    if (ime == vlasnik && vlasnik == vlasnik2) {
                        rok = true;
                    }
                });
        });
    });
    return rok;
}

console.log(rokfeler(automobili, "Lazar"));

/* Pretpostavimo da su u niz objekata automobili dodavani po redosledu dolaska na
auto plac. Drugim rečima, na početku niza nalaze se automobili koji su ranije
došli na plac, dok se na kraju niza nalaze automobili koji su skorije došli na plac.
Što je veći indeks automobila u nizu, to je skorije došao na plac.
Podelimo niz automobila na dva dela - jednu polovinu čine automobili koji su od
ranije na placu, a drugu polovinu čine automobili koji su skorije došli na plac.
Ukoliko u nizu ima neparan broj elemenata, tada prvi deo ima jedan više
automobil od drugog dela, u suprotnom prva i druga polovina niza imaju jednak
broj automobila.
Napisati funkciju skorije koja vraća true ukoliko je polovina automobila koja je
skorije došla na plac u proseku mlađa (po godini proizvodnje) od polovine
automobila koja je ranije došla na plac. */

let skorije = niz => {
    let glavniProsek = prosecnoGodiste(niz);
    let suma1 = 0;
    let br1 = 0;
    let suma2 = 0;
    let br2 = 0;
    for (let i = 0; i < niz.length / 2; i++) {
        suma1 += niz[i].godiste;
        br1++;
    }
    let rezultat1 = suma1 / br1;
    for (let i = niz.length - 1; i > (niz.length -1) / 2; i--) {
        suma2 += niz[i].godiste;
        br2++;
    }
    let rezultat2 = suma2 / br2;
    if (rezultat2 > rezultat1) {
        return true;
    }
    else {
        return false;
    }
}

console.log(skorije(automobili));








