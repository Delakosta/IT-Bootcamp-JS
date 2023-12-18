// Zadatak 1

let proracunBmi = (t, v) => {
    let bmi = t / (v / 100) ** 2;
    if (bmi <= 18.5) {
        console.log(`Pothranjenost`)
    }
    else if (bmi > 18.5 || bmi < 24.9) {
        console.log(`Normalna težina`)
    }
    else if (bmi >= 24.9 || bmi <= 30) {
        console.log(`Povišena težina`)
    }
    else {
        console.log(`Gojaznost`)
    }
}
proracunBmi(100, 182);



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
    console.log(`Potrebno je ${ned} nedelja`);
}
nutricionista(70, 63);



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
    let rezultat = (suma - minVr - maxVr) / br;
    console.log(`Rezultat je: ${rezultat}`);
}
prosecnaTezina(tezine);



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