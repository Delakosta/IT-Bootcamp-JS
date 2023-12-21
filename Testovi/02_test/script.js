// Zadatak 1

let proracunBmi = (t, v) => {
    let bmi = t / (v / 100) ** 2;
    return bmi;
}

let ispisBmi = (t, v) => {
    if (proracunBmi(t, v) <= 18.5) {
        console.log(`Pothranjenost`)
    }
    else if (proracunBmi(t, v) > 18.5 && proracunBmi(t, v) < 24.9) {
        console.log(`Normalna težina`)
    }
    else if (proracunBmi(t, v) >= 24.9 && proracunBmi(t, v) <= 30) {
        console.log(`Povišena težina`)
    }
    else {
        console.log(`Gojaznost`)
    }
}
ispisBmi(80, 182);



// Zadatak 2

let nutricionista = (t, zt) => {
    let ned = 0;
    if (t < zt) {
        while (t <= zt) {
            t += t * 0.01;
            ned++;
        }
    }
    else {
        while (t >= zt) {
            t -= t * 0.02;
            ned++;
        }
    }
    return ned;
}
console.log(`Potrebno je ${nutricionista(70, 63)} nedelja.`);



// Zadatak 3

let tezine = [120, 118, 115, 116, 110, 112, 110, 113]

prosecnaTezina = niz => {
    maxVr = niz[0];
    minVr = niz[0];
    let suma = 0;
    let br = - 2;
    for (let i = 0; i < niz.length; i++) {
        if(niz[i] > maxVr) {
            maxVr = niz[i];
        }
        if (niz[i] < minVr) {
            minVr = niz[i];
        }
        suma += niz[i];
        br++;
    }
    return (suma - minVr - maxVr) / br;
}
console.log(`Rezultat je: ${prosecnaTezina(tezine)}`);



// Zadatak 4

let tezineKlijenata = [73, 85, 110, 50, 105, 72]

let s1 = niz => {
    let zbir = 0;
    for (let i = 0; i < niz.length; i++) {
        zbir += niz[i];
    }
    return zbir / niz.length;
}

let s2 = niz => {
    let zbir = 0;
    let br = 0;
    for (let i = 0; i < niz.length; i++) {
        if (i % 2 == 0) {
            zbir += niz[i];
            br++;
        }
    }
    return zbir / br;
}

let napredak = niz => {
    let raz = s2(niz) * 0.1;
    if (raz > s2(niz) - s1(niz)) {
        return false;
    } else {
        return true;
    }
}
console.log(napredak(tezineKlijenata));



// Zadatak 5

let pribliznaTezina = niz => {
    let br = 0;
    for ( let i = 0; i < niz.length; i++) {
        if (nutricionista(niz[i], s1(niz)) <= 1) {
            br++;
        }
    }
    return br;
}

let ispisPribliznaTezina = niz => {
    if (pribliznaTezina(niz) > niz.length / 3) {
        document.write(`<p style= "color: green">Svi klijenti su priblizno iste tezine.</p>`);
    }
    else {
        document.write(`<p style= "color: red">Nisu svi klijenti su priblizno iste tezine.</p>`);
    }
}

ispisPribliznaTezina(tezineKlijenata);