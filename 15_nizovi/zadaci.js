// Test primeri

let brojevi1 = [8, 4 , -2, 0, 1, 0];
let brojevi2 = [10, -5 , 0, -3];
let brojevi3 = [1, 2, 3, 4, 5, 6];
let brojevi4 = [8, 6, 7, 8, 2];



// Zadatak 2 - Odrediti zbir elemenata celobrojnog niza.

let sumaElem = niz => {
    let suma = 0;
    for (let i = 0; i < niz.length; i++) {
        suma += niz[i];
    }
    return suma;
}

console.log(sumaElem(brojevi1));
console.log(sumaElem(brojevi2));
console.log(sumaElem(brojevi3));



// Zadatak 3 - Odrediti proizvod elemenata celobrojnog niza.

let proizElem = niz => {
    let proizvod = 1;
    for (let i = 0; i < niz.length; i++) {
        proizvod *= niz[i];
    }
    return proizvod;
}

console.log(proizElem(brojevi1));
console.log(proizElem(brojevi2));
console.log(proizElem(brojevi3));


// Zadatak 4 - Odrediti srednju vrednost elemenata celobrojnog niza.


let srednjaVr = niz =>  sumaElem(niz) / niz.length  

console.log(srednjaVr(brojevi1));
console.log(srednjaVr(brojevi2));
console.log(srednjaVr(brojevi3));



// Zadatak 4a - Odrediti srednju vrednost parnih elemenata celobrojnog niza.


let srVrednostParnih = niz => {
    let suma = 0;
    let br = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] % 2 == 0) {
            suma += niz[i];
            br++;
        }
    }
    return suma / br;
}

console.log(srVrednostParnih(brojevi1));
console.log(srVrednostParnih(brojevi2));
console.log(srVrednostParnih(brojevi3));




// Zadatak 5 - Odrediti maksimalnu vrednost u celobrojnom nizu.


let maksVr = niz => {
    let vr = niz[0];
    for ( let i = 1; i < niz.length; i++) {
        if (niz[i] > vr) {
            vr = niz[i];
        }
    }
    return vr;
}

console.log(maksVr(brojevi1));
console.log(maksVr(brojevi2));
console.log(maksVr(brojevi3));




// Zadatak 7 - Odrediti indeks maksimalnog elementa celobrojnog niza.

let indMaxNiza = niz => {
    let vr = niz[0];
    let index = 0;

    for (let i = 1; i < niz.length; i++) {
        if (niz[i] > vr) {
            vr = niz[i];
            index = i;
        }
    }
    return index;
}

console.log(indMaxNiza(brojevi4));



// Zadatak 6 - Odrediti minimalnu vrednost u celobrojnom nizu.


let minVr = niz => {
    let vr = niz[0];
    for ( let i = 1; i < niz.length; i++) {
        if (niz[i] < vr) {
            vr = niz[i];
        }
    }
    return vr;
}

console.log(minVr(brojevi1));
console.log(minVr(brojevi2));
console.log(minVr(brojevi3));



// Zadatak 8 - Odrediti indeks minimalnog elementa celobrojnog niza.


let indMinNiza = niz => {
    let vr = niz[0];
    let index = 0;

    for (let i = 1; i < niz.length; i++) {
        if (niz[i] < vr) {
            vr = niz[i];
            index = i;
        }
    }
    return index;
}

console.log(indMinNiza(brojevi4));


// Zadatak 9 - Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.


let elCbrNiza = niz => {
    let br = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] > srednjaVr(niz)) {
            br++;
        }
    }
    return br;
}

console.log(elCbrNiza(brojevi1));
console.log(elCbrNiza(brojevi2));
console.log(elCbrNiza(brojevi3));
console.log(elCbrNiza(brojevi4));


// Zadatak 10 - Izračunati zbir pozitivnih elemenata celobrojnog niza.

let zbirPozEl = niz => {
    let zbir = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] > 0){
            zbir += niz[i];
        }
    }
    return zbir;
}
console.log(zbirPozEl(brojevi1));
console.log(zbirPozEl(brojevi2));
console.log(zbirPozEl(brojevi3));
console.log(zbirPozEl(brojevi4));



//  Zadatak 11 - Odrediti broj parnih elemenata u celobrojnom nizu.


let zbirParEl = niz => {
    let br = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] % 2 == 0){
            br++;
        }
    }
    return br;
}
console.log(zbirParEl(brojevi1));
console.log(zbirParEl(brojevi2));
console.log(zbirParEl(brojevi3));
console.log(zbirParEl(brojevi4));


//  Zadatak 12 - Odrediti broj parnih elemenata sa neparnim indeksom.

let parNepar = niz => {
    let br = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] % 2 == 0 && i % 2 != 0) {
            br++;
        }
    }
    return br;
}

console.log(parNepar(brojevi1));
console.log(parNepar(brojevi2));
console.log(parNepar(brojevi3));
console.log(parNepar(brojevi4));


// Zadatak 13 -  Izračunati sumu elemenata niza sa parnim indeksom.

let parIndex = niz => {
    let suma = 0;
    for (let i = 0; i < niz.length; i++) {
        if (i % 2 == 0) {
            suma += niz[i];
        }
    }
    return suma;
}

console.log(parIndex(brojevi1));
console.log(parIndex(brojevi2));
console.log(parIndex(brojevi3));
console.log(parIndex(brojevi4));



// Zadatak 14 - Promeniti znak svakom elementu celobrojnog niza.

let znak = niz => {
    for (let i = 0; i < niz.length; i++) {
        niz[i] *= -1;
    }
    return niz;
}

console.log(znak(brojevi1));
console.log(znak(brojevi2));
console.log(znak(brojevi3));
console.log(znak(brojevi4));



// Zadatak 15 - Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.


let neparPar = niz => {
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] % 2 != 0 && i % 2 == 0) {
                niz[i] *= -1;
        }
    }
    return niz;
}

console.log(neparPar(brojevi1));
console.log(neparPar(brojevi2));
console.log(neparPar(brojevi3));
console.log(neparPar(brojevi4));
