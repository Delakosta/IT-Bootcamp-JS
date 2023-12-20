let brojevi1 = [1, 2, 3, 4, 5, 6]
let brojevi2 = [-7, -8, -9, -10, -11, -12]



// Ispisati sve elemente niza od 5 stringova.

let ispis = niz => {
    for (let i = 0; i < niz.length; i++) {
        console.log(niz[i]);
    }
}
ispis(brojevi1);



// Odrediti zbir elemenata celobrojnog niza.

let suma = niz => {
    let zbir = 0;
    for (let i = 0; i < niz.length; i++) {
        zbir += niz[i];
    }
    return zbir;
}
console.log(suma(brojevi1));



// Odrediti proizvod elemenata celobrojnog niza.

let mnozi = niz => {
    let proizvod = 1;
    for (let i = 0; i < niz.length; i++) {
        proizvod *= niz[i];
    }
    return proizvod;
}
console.log(mnozi(brojevi1));



// Odrediti srednju vrednost elemenata celobrojnog niza.


let srVred = niz => suma(niz) / niz.length;

console.log(srVred(brojevi1));



// Odrediti maksimalnu vrednost u celobrojnom nizu.


let maksVred = niz => {
    let vr = niz[0];
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] > vr) {
            vr = niz[i];
        }
    }
    return vr;
}
console.log(maksVred(brojevi1));


// Odrediti minimalnu vrednost u celobrojnom nizu.


let minVred = niz => {
    let vr = niz[0];
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] < vr) {
            vr = niz[i];
        }
    }
    return vr;
}
console.log(minVred(brojevi1));



// Odrediti indeks maksimalnog elementa celobrojnog niza.

let maksIndVred = niz => {
    let vr = niz[0];
    let ind = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] > vr) {
            vr = niz[i];
            ind = i;
        }
    }
    return ind;
}
console.log(maksIndVred(brojevi1));



// Odrediti indeks minimalnog elementa celobrojnog niza.

let minIndVred = niz => {
    let vr = niz[0];
    let ind = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] < vr) {
            vr = niz[i];
            ind = i;
        }
    }
    return ind;
}
console.log(minIndVred(brojevi1));



// Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.

let veciOdSrVred = niz => {
    let br = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] > srVred(niz)) {
            br++;
        }
    }
    return br;
}
console.log(veciOdSrVred(brojevi1));



// Izračunati zbir pozitivnih elemenata celobrojnog niza.

let zbirPozEl = niz => {
    let zbir = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] > 0) {
            zbir += niz[i];
        }
    }
    return zbir;
}
console.log(zbirPozEl(brojevi1));



//  Odrediti broj parnih elemenata u celobrojnom nizu.

let brParEl = niz => {
    let br = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] % 2 == 0) {
            br++;
        }
    }
    return br;
}
console.log(brParEl(brojevi1));



//  Odrediti broj parnih elemenata sa neparnim indeksom.

let brParElNeparInd = niz => {
    let br = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] % 2 == 0 && i % 2 != 0) {
            br++;
        }
    }
    return br;
}
console.log(brParElNeparInd(brojevi1));



//  Izračunati sumu elemenata niza sa parnim indeksom.

let zbirParInd = niz => {
    let zbir = 0;
    for (let i = 0; i < niz.length; i++) {
        if (i % 2 == 0) {
            zbir += niz[i];
        }
    }
    return zbir;
}
console.log(zbirParInd(brojevi1));



//  Promeniti znak svakom elementu celobrojnog niza.

let znak = niz => {
    for (let i = 0; i < niz.length; i++) {
        niz[i] *= -1
    }
    return niz;
}
console.log(znak(brojevi2));



// Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.

let znakNepar = niz => {
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] % 2 != 0 && i % 2 == 0) {
            niz[i] *= -1;
        }
    }
    return niz;
}
console.log(znakNepar(brojevi1));



let imena = ["Uros", "Ivan", "Snezana", "Dragan", "Vuk", "Ana"];



// Ispisati dužinu svakog elementa u nizu stringova. 

let ispisImena = niz => {
    for (let i = 0; i < niz.length; i++) {
        let br = 0;
        for (let j = 0; j < niz[i].length; j++) {
            br++;
        }
    console.log(br);
    }
}
ispisImena(imena);


// Prostiji nacin

let ispisImena2 = niz => {
    for (let i = 0; i < niz.length; i++) {
        let s = niz[i];
        console.log(s.length);
    }
}
ispisImena2(imena);



// Odrediti element u nizu stringova sa najvećom dužinom.

let najvecaDuz = niz => {
    let duz = niz[0].length;
    let ime = niz[0];
    for (let i = 1; i < niz.length; i++) {
        if (niz[i].length > duz) {
            duz = niz[i].length;
            ime = niz[i];
        }
    }
    console.log(ime);
}
najvecaDuz(imena);



// Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.

let prosecnaDuzinaStringova = niz => {
    let zbir = 0;
    for (let i = 0; i < niz.length; i++) {
        zbir += niz[i].length;
    }
    return zbir / niz.length;
}
console.log(prosecnaDuzinaStringova(imena));

let vecaOdProsecneDuzine = niz => {
    let br = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].length > prosecnaDuzinaStringova(niz)) {
            br++;
        }
    }
    console.log(br);
}
vecaOdProsecneDuzine(imena);



// Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’. 

let sadrzeA = niz => {
    let br = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].includes('a')) {
            br++;
        }
    }
    console.log(br);
}
sadrzeA(imena);

// 2 nacin

let sadrzeA2 = niz => {
    let br = 0;
    for (let i = 0; i < niz.length; i++) {
        for (let j = 0; j < niz[i].length; j++) {
            if (niz[i][j] == 'a') {
                br++;
                break;
            }
        }
    }
    console.log(br);
}
sadrzeA2(imena);



// Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’. 

let pocinjeNaA = niz => {
    let br = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i][0] == 'A' || niz[i][0] == 'a') {
            br++;
        }
    }
    console.log(br);
}
pocinjeNaA(imena);

// 2 nacin

let pocinjeNaA2 = niz => {
    let br = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].startsWith('a') || niz[i].startsWith('A')) {
            br++;
        }
    }
    console.log(br);
}
pocinjeNaA2(imena);

brojevi1 = [1, 2, 3, 4, 5, 6]
brojevi2 = [7, 8, 9, 10, 11, 12]

// Zadatak 24

let zad24a = (a, b) => {
    let n = a.length; // n = b.length
    let c = [];
    for (let i = 0; i < n; i++) {
        c.push(a[i], b[i]); 
    }
    return c;
}
console.log(zad24a(brojevi1, brojevi2));



// Zadatak 25

let zad25 = (a, b) => {
    let c = [];
    for (let i = 0; i < a.length; i++) {
        c.push(a[i] * b[i]);
    }
    return c;
}
console.log(zad25(brojevi1, brojevi2));



// Zadatak 26

let zad26 = a => {
    let n = a.length;
    let b = [];
    for(let i = 0; i < n; i++) {
        let s = 2 * n - 1 - a[i];
        b.push((a[i] + s) / 2);
    }
    return b;
}
console.log(zad26(brojevi1));
