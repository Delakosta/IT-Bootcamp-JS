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