//Ispisati brojeve od 1 do 20:
//a)Svaki u istom redu
//b)Svaki u novom redu

//a)

let i = 1;

while (i <= 20) {
    console.log(i);
    i++;
}

//b)

i = 1;
let mem = ""

while (i <= 20) {
    mem = mem + i + " ";
    i++;
}
console.log(mem);

//Ispisati brojeve od 20 do 1.

i = 20;

while (i >= 1) {
    console.log(i);
    i--;
}

//Ispisati parne brojeve od 1 do 20.

i = 1;

while (i <= 20) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
}

//Kreirati n paragrafa sa proizvoljnim tekstom i naizmenično ih obojiti u tri različite boje

let n = 11;
i = 1;

while (i <= n) {
    if (i % 3 == 0)
    {
        document.body.innerHTML = document.body.innerHTML + `<p class='zelena'>Ovo je paragraf ${i}</p>`
    }
    else if (i % 2 == 0) {
        document.body.innerHTML = document.body.innerHTML + `<p class='plava'>Ovo je paragraf ${i}</p>`
    }
    else {
        document.body.innerHTML = document.body.innerHTML +  `<p class='crvena'>Ovo je paragraf ${i}</p>`
    }
    i++;
}

//Kreirati n proizvoljnih slika i staviti im naizmenično dva različita okvira

n = 5;
i = 1;

while (i <= n) {
    if (i % 2 == 0) {
        document.body.innerHTML += `<img class='slika1' src='https://cn.i.cdn.ti-platform.com/content/437/showpage/teen-titans-go%21/za/ttg-200x200.png'>`
    }
    else {
        document.body.innerHTML += `<img class='slika2' src='https://cn.i.cdn.ti-platform.com/content/437/showpage/teen-titans-go%21/za/ttg-200x200.png'>`
    }
    i++;
}

//Odrediti sumu brojeva od 1 do 100

i = 1;
suma = 0;

while (i <= 100) {
    suma += i;
    i++;
}
console.log(`Suma brojeva od 1 do 100 je ${suma}`);

//Odrediti sumu brojeva od 1 do n

i = 1;
n = 100;
suma = 0;

while (i <= n) {
    suma += i;
    i++;
}
console.log(`Suma brojeva od 1 do ${n} je ${suma}`);

//Odrediti sumu brojeva od n do m

n = 1;
let m = 100;
suma = 0;
i = n;

while (i <= m) {
    suma += i;
    i++;
}
console.log(`Suma brojeva od ${n} do ${m} je ${suma}`);

//Odrediti proizvod brojeva od n do m

n = 1;
m = 3;
let proizvod = 1;
i = n;

while (i <= m) {
    proizvod *= i;
    i++;
}
console.log(`Proizvod brojeva od ${n} do ${m} je ${proizvod}`);

//Odrediti sumu kvadrata parnih i sumu kubova neparnih brojeva od n do m

n = 1;
m = 3;
let sumaKvPar = 0;
let sumsaKuNep = 0;

while (n <= m) {
    if (n % 2 == 0) {
        sumaKvPar += n ** 2;
    }
    else {
        sumsaKuNep += n ** 3;
    }
    n++;
}
console.log(`Suma kvadrata parnih brojeva je ${sumaKvPar}`);
console.log(`Suma kubova neparnih brojeva je ${sumsaKuNep}`);

//Odrediti sa koliko brojeva je deljiv uneti broj k

let k = 9;
i = 1;
let deljivo = 0;

while (i <= k) {
    if (k % i == 0) {
        deljivo++;
    }
    i++;
}
console.log(`Broj ${k} je deljiv sa ${deljivo} brojeva`);

//Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.

n = 21;
i = 1;
deljivo = 0;

while (i <= n) {
    if (n % i == 0) {
        deljivo++;
    }
    i++;
}
if (deljivo == 2) {
    console.log(`Broj je prost`);
}
else {
    console.log(`Broj nije prost`);
}

//Napisati program koji unetom broju N:
//a) Sabira sve cifre
//b) Određuje aritmetičku sredinu cifara
//c) Ispisuje cifre u obrnutom redosledu

let broj = 1564;
let zbir = 0;
let cifre = 0;
let redosled = ""

while (broj > 0) {
    redosled += broj % 10 + " ";
    zbir += broj % 10;
    broj = Math.floor(broj / 10);
    cifre++;
}

console.log(`Zbir cifara je ${zbir}`);
console.log(`Aritmeticka sredina cifara je ${zbir / cifre}`);
console.log(`Obrnuti redosled cifara je ${redosled}`);