//Zadatak 1b

let i = 1;

while (i <= 20) {
    console.log(i);
    i++;
}

console.log("Kraj petlje");

//Zadatak 1a

i = 1;
let poruka = "";

while (i <= 20) {
    poruka = poruka + i + " ";
    i++;
}
console.log(poruka);

//Zadatak 2

//1 nacin

i = 20;

while (i >= 1) {
    console.log(i);
    i--;
}

//2 nacin

i = 1;

while (i <= 20) {
    console.log(21 - i);
    i++;
}

//Zadatak 3

//1 nacin

i = 1;

while (i <= 20) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
}

//2 nacin

i = 1;

while (i <= 20) {
    console.log(i);
    i+=2;
}

//4 zadatak

//Kreirati n paragrafa sa proizvoljnim tekstom i naizmenično ih obojiti u tri različite boje

/*
let n = 11;
i = 1;

while (i <= n) {
    if (i % 3 == 1 ) {
        document.body.innerHTML += `<p class='plava'>Paragraf broj ${i}</p>`;
    }
    else if (i % 3 == 2) {
        document.body.innerHTML += `<p class='crvena'>Paragraf broj ${i}</p>`;
    }
    else {
        document.body.innerHTML += `<p class='zelena'>Paragraf broj ${i}</p>`;
    }
    i++;
}
*/

let n = 11;
i = 1;

while (i <= n) {

    let klasa; // let vazi u bloku u kom je definisana
    if (i % 3 == 1 ) {
        klasa = 'plava';
    }
    else if (i % 3 == 2) {
        klasa = 'crvena';
    }
    else {
        klasa = 'zelena';
    }
    document.body.innerHTML += `<p class='${klasa}'>Paragraf broj ${i}</p>`;
    i++;
}

//Zadatak 6 : Suma brojeva od 1 do 100

i = 1;
let suma = 0;

while (i <= 100) {
    suma = suma + i;
    i++;
}
console.log(`Suma brojeva od 1 do 100 jednaka je: ${suma}`);


//Zadatak 7: Odrediti sumu brojeva od 1 do n

i = 1;
suma = 0;
n = 50;

while (i <= n) {
    suma = suma + i;
    i++;
}
console.log(`Suma brojeva od 1 do ${n} jednaka je: ${suma}`);


//Zadatak 8: Odrediti sumu brojeva od n do m

n = 100;
let m = 300;
suma = 0;
i = n;

while (i <= m) {
    suma += i;
    i++;
}
console.log(`Suma brojeva od ${n} do ${m} jednaka je: ${suma}`);


//Zadatak 9: Odrediti proizvod brojeva od n do m

n = 1;
m = 6;
i = n;
proizvod = 1;

while (i <= m) {
    proizvod = proizvod * i;
    i++;
}
console.log(`Proizvod brojeva od ${n} do ${m} jednaka je: ${proizvod}`);


//Zadatak 10: Odrediti sumu kvadrata parnih i sumu kubova neparnih brojeva od n do m

n = 2;
m = 5;
i = n;
sumaKvPar = 0;
sumsaKuNep = 0;

while (i <= m) {
    if (i % 2 == 0){
        sumaKvPar += i * i; // (i ** 2)
    } else {
        sumsaKuNep += i * i * i; // (i ** 3)
    }
    i++;
}
console.log(sumaKvPar + sumsaKuNep);


//Odrediti sa koliko brojeva je deljiv uneti broj k

let k = 12;
i = 1;

let brojDelioca = 0;

while (i <= k) {
    if (k % i == 0) {
        brojDelioca++;
    }
    i++;
}
console.log(`Broj delioca broja ${k} jednak je ${brojDelioca}`);

// Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.

n = 113;
i = 1;

brojDelioca = 0;

while (i <= n) {
    if (n % i == 0) {
        brojDelioca++;
    }
    i++;
}

if (brojDelioca == 2) {
    console.log(`Broj ${n} je prost broj`);
} else {
    console.log(`Broj ${n} je slozen broj`);
}

