//Ispisati brojeve od 1 do 20:
//a)Svaki u istom redu
//b)Svaki u novom redu

//a)

let i = 1;

for (i; i <= 20; i++) {
    console.log(i);
}

//b)

i = 1;
let red = "";

for (i; i <= 20; i++) {
    red += i + " "
}
console.log(red);

//Ispisati brojeve od 20 do 1.

i = 20;

for (i; i >= 0; i--) {
    console.log(i);
}

//Ispisati parne brojeve od 1 do 20.

i = 1;

for (i; i <= 20; i++) {
    if (i % 2 == 0){
        console.log(i);
    }
}

//Kreirati n paragrafa sa proizvoljnim tekstom i naizmenično ih obojiti u tri različite boje

n = 7;
i = 1;

for (i; i <= n; i++) {
    if (i % 3 == 0) {
        document.body.innerHTML += `<p class='zelena'>Ovo je paragraf ${i}</p>`;
    }
    else if (i % 2 == 0) {
        document.body.innerHTML += `<p class='plava'>Ovo je paragraf ${i}</p>`;
    }
    else {
        document.body.innerHTML += `<p class='crvena'>Ovo je paragraf ${i}</p>`;
    }
}

//Kreirati n proizvoljnih slika i staviti im naizmenično dva različita okvira

n = 7;
i = 1;

for (i; i <= n; i++) {
    if (i % 2 == 0) {
        document.body.innerHTML += `<img class='slika1' src='https://cn.i.cdn.ti-platform.com/content/437/showpage/teen-titans-go%21/za/ttg-200x200.png'>`;
    }
    else {
        document.body.innerHTML += `<img class='slika2' src='https://cn.i.cdn.ti-platform.com/content/437/showpage/teen-titans-go%21/za/ttg-200x200.png'>`;
    }
}

//Odrediti sumu brojeva od 1 do 100

i = 1;
let suma = 0;

for (i; i <= 100; i++) {
    suma += i;
}
console.log(`Suma brojeva od 1 do 100 je ${suma}`);

//Odrediti sumu brojeva od 1 do n

i = 1;
n = 100;
suma = 0;

for (i; i <= n; i++) {
    suma += i;
}
console.log(`Suma brojeva od 1 do ${n} je ${suma}`);

//Odrediti sumu brojeva od n do m

n = 1;
let m = 100;
i = n;
suma = 0;

for (i; i <= m; i++) {
    suma += i;
}
console.log(`Suma brojeva od ${n} do ${m} je ${suma}`);

//Odrediti proizvod brojeva od n do m

n = 1;
m = 3;
i = n;
let proizvod = 1;

for (i; i <= m; i++) {
    proizvod *= i;
}
console.log(`Proizvod brojeva od ${n} do ${m} je ${proizvod}`);

//Odrediti sumu kvadrata parnih i sumu kubova neparnih brojeva od n do m

n = 1;
m = 3;
let sumaKvPar = 0;
let sumsaKuNep = 0;

for (n; n <= 3; n++) {
    if (n % 2 == 0) {
        sumaKvPar += n ** 2;
    }
    else {
        sumsaKuNep += n ** 3;
    }
}
console.log(`Suma kvadrata parnih brojeva je ${sumaKvPar}`);
console.log(`Suma kubova neparnih brojeva je ${sumsaKuNep}`);

//Odrediti sa koliko brojeva je deljiv uneti broj k

i = 1;
let k = 24;
let deljiv = 0;

for (i; i <= k; i++) {
    if (k % i == 0) {
        deljiv++;
    }
}
console.log(`Broj ${k} je deljiv sa ${deljiv} broja`);

//Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.

n = 3;
i = 1;
deljiv = 0;

for (i; i <= 15; i++) {
    if (n % i == 0) {
        deljiv++;
    }
}
if (deljiv == 2) {
    console.log(`Broj ${n} je prost`)
}
else {
    console.log(`Broj ${n} je slozen`)
}