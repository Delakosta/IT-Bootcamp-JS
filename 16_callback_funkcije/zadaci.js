let a = [6, 8, 9, 3, 1];


// Zadatak 2 - Odrediti zbir elemenata celobrojnog niza.

let sumaElem = niz => {
    let suma = 0;
    niz.forEach(el => {
        suma += el;

    });
    return suma;
}
console.log(sumaElem(a));

// Zadatak 5 - Odrediti maksimalnu vrednost u celobrojnom nizu.

let maxVr = niz => {
    let max = niz[0];
    niz.forEach(elem => {
        if (elem > max) {
            max = elem;
        }
    });
    return max;
}
console.log(maxVr(a));

// Zadatak 3 - Odrediti proizvod elemenata celobrojnog niza.

let proizvodElem = niz => {
    let proizvod = 1;
    niz.forEach(el => {
        proizvod *= el;

    });
    return proizvod;
}
console.log(proizvodElem(a));

// Zadatak 4 - Odrediti srednju vrednost elemenata celobrojnog niza.

let srdVred = niz => {
    let suma = 0;
    niz.forEach(el => {
        suma += el;
    });
    return suma / niz.length;
}
console.log(srdVred(a));

// Zadatak 6 - Odrediti minimalnu vrednost u celobrojnom nizu.

let minVr = niz => {
    let min = niz[0];
    niz.forEach(el => {
        if(el < min) {
            min = el;
        }
    });
    return min;
}
console.log(minVr(a));

// Zadatak 7 - Odrediti indeks maksimalnog elementa celobrojnog niza.

let maxInd = niz => {
    let max = niz[0];
    let ind = 0;
    niz.forEach((el, i) => {
        if (el > max) {
            max = el;
            ind = i;
        }
    });
    return ind;
}
console.log(maxInd(a));

/*

let maxInd2 = niz => {
    let max = niz[0];
    let ind = 0;
    let sviInd = [];
    niz.forEach((el, i) => {
        if (el > max) {
            max = el;
            ind = i;
        }
    });
    niz.forEach((el, i) => {
        if (el == max) {
            sviInd.push;
        }
    });
console.log(maxInd(a));

*/



// Zadatak 8 - Odrediti indeks minimalnog elementa celobrojnog niza.

let minInd = niz => {
    let min = niz[0];
    let ind = 0;
    niz.forEach((el, i) => {
        if (el < min) {
            min = el;
            ind = i;
        }
    });
    return ind;
}
console.log(minInd(a));

// Zadatak 9 - Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.

let brElNiza = niz => {
    let br = 0;
    niz.forEach(el => {
        if (el > srdVred(niz)) {
            br++;
        }
    });
    return br;
}
console.log(brElNiza(a));

// Zadatak 19 - Ispisati dužinu svakog elementa u nizu stringova. 

let duzinaSvihStringova = niz => {
    niz.forEach(el => {
        console.log(el.length);
    });
}

let imena = ["Uros", "Ivan", "Ana", "Vuk", "Snezana", "Dragan"];

duzinaSvihStringova(imena);

// Zadatak 20 - Odrediti element u nizu stringova sa najvećom dužinom.

let stringMaxDuzina = niz => {
    let maxVr = niz[0];
    let duzina = niz[0].length;
    niz.forEach(el => {
        if(el.length > duzina) {
            maxVr = el;
            duzina = el.length;
        }
    });
    return maxVr;
}
console.log(stringMaxDuzina(imena));



// Zadatak 24

let zad24 = (a, b) => {
    let c = [];
    a.forEach((el, i) => {
        c.push(el, b[i])
    });
    return c;
}

let n1 = [1, 2, 3, 4];
let n2 = [5, 6, 7, 8];

console.log(zad24(n1, n2));

// Zadatak 25

let zad25 = (a, b) => {
    let c = [];
    for (let i = 0; i < a.length; i++) {
        c.push(a[i] * b[i]);
    }
    return c;
}
console.log(zad25(n1, n2));

// 2 nacin

let zad25forEach = (a, b) => {
    let c = [];
    a.forEach((el, i) => {
        c.push(el * b[i])
    });
    return c;
}
console.log(zad25forEach(n1, n2));


// Zadatak 26 


let zad26for = a => {
    let k = a.length;
    let n = k / 2;
    let b = [];
    for (let i = 0; i < n; i++) {
        b[i] = (a[i] + a[2 * n - 1 - i]) / 2;
    }
    return b;
}
console.log(zad26for(n1));


// 2 nacin

let zad26forEach = a => {
    let b = [];
    let k = a.length;
    let n = k / 2;
    a.forEach((el, i) => {
        if (i < n) {
            b[i] = (a[i] + a[2 * n - 1 - i]) / 2;
        }
    });
    return b;
}
console.log(zad26forEach(n1));

