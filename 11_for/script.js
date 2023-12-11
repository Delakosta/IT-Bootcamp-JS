// 1 zadatak - Ispisati brojeve od 1 do 20 


//while

let i = 1;

while (i <= 20) {
    console.log(`Petlja while ${i}`);
    i++;
}

//for

for (let j = 1; j <= 20; j ++) {
    console.log(`Petlja for ${j}`);
}


// 2 zadatak - Ispisati brojeve od 20 do 1

for (let k = 20; k >=1; k--) {
    console.log(`Petlja for ${k}`);
}


// 3 zadatak - Ispisati parne brojeve od 1 do 20 

for (let j = 0; j <= 20; j+=2) {
    console.log(`Petlja for ${j}`);
}

//5 zadatak - Odrediti sumu brojeva od 1 do n

let suma = 0;
let n = 5;

for (let p = 1; p <= n; p++) {
    suma += p; // suma = suma + p
}

console.log(`Suma brojeva od 1 do ${n} je ${suma}`)

// 4 zadatak - Ispisati dvostruku vrednost brojeva od 5 do 15 *

i = 5;
n = 15;
let duplo;

for (i; i <= 15; i++) {
    console.log(i * 2);
}

// 6 zadatak - Odrediti sumu brojeva od n do m *

n = 1;
m = 5;
i = n;
suma = 0;

for (i; i <= m; i++) {
    suma += i;
}
console.log(`Suma brojeva od ${n} do ${m} je ${suma}`)

// 7 zadatak - Odrediti proizvod brojeva od n do m

n = 1;
m = 5;
i = n;
proizvod = 1;

for (i; i <= m; i++) {
    proizvod *= i;
}
console.log(`Proizvod brojeva od ${n} do ${m} je ${proizvod}`);

// 8 zadatak - Odrediti sumu kvadrata brojeva od n do m *

n = 1;
m = 5;
i = n;
suma = 0;

for (i; i <= m; i++) {
    suma += i ** 2;
}
console.log(`Suma kvadrata brojeva od ${n} do ${m} je ${suma}`);

// 9 zadatak - Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. 
// For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora).

i = 1;
n = 3;

for (i; i <= n; i++) {
    document.write(`<img src='slike/${i}.png'>`)
}


// Ispisati aritmetičku sredinu brojeva od n do m.

n = 3;
m = 6;
suma = 0;
let br = 0;

for (i = n; i <= n; i++) {
    suma =+ i;
    br++;
}
let arsr = suma / br;
console.log(`Aritmeticka sredina brojeva od ${n} do ${m} je ${arsr}`);

// Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100. *

m = 20;
n = 100;
i = m;
proizvod = 1;

for (i; i <= 100; i++) {
    if (i % 11 == 0) {
        proizvod *= i;
    }
}
console.log(`Proizvod svih brojeva deljivih sa 11 u intervalu od ${m} do ${n} je ${proizvod}`);

// Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.

m = 5;
n = 150;
i = m;
let delj = 0;

for (i; i <= n; i++) {
    if (i % 13 == 0) {
        delj++;
    }
}
console.log(`Brojeva deljivih sa 13 u intervalu od ${m} do ${n} ima ${delj}.`); 

// 16 zadatak - Odrediti sumu brojeva od n do m koji nisu deljivi brojem a

n = 5;
m = 15;
suma = 0;
a = 4;

for (i = n; i <=m; i++) {
    if (i % a != 0) {
        suma += i;
    }
}
console.log(`Suma brojeva od ${n} do ${m} koji nisu deljivi brojem ${a} je ${suma}`);

// Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno. *

n = -20;
m = 21;
let poz = 0;
let neg = 0;

for (i = n; i<=m; i++) {
    if (i > 0){
        poz++;
    }
    else {
        neg++;
    }
}
console.log(`Od brojeva ${n} do ${m} pozitivno je ${poz} brojeva a negativno ${neg} brojeva.`);

// Prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5.

n = 5;
m = 50;
delj = 0;

for (i = n; i <= m; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        delj++;
    }
}
console.log(`Brojeva od ${n} do ${m} koji su deljivi sa 3 ili sa 5 je ${delj}`);

// Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4.

n = 1;
m = 20;
suma = 0;
broj = 0;

for (i = n; i <= m; i++) {
    if (i % 10 == 4) {
        suma += i;
        broj++;
    }
}
console.log(`Suma ${broj} brojeva od n do m kojima je poslednja cifra 4 je ${suma}`);

// Odrediti proizvod brojeva od n do m koji su deljivi brojem a *

n = 1;
m = 5;
proizvod = 1;
a = 4;

for (i = n; i <=m; i++) {
    if (i % a == 0) {
        proizvod *= i;
    }
}
console.log(`Proizvod brojeva od ${n} do ${m} koji su deljivi brojem ${a} je ${proizvod}`);

// Zadatak 18 - Odrediti sa koliko brojeva je deljiv uneti broj k

//1 nacin

let k = 12;
delj = 0;

for (i=1; i <= k; i++) {
    if (k % i == 0) {
        delj++;
    }
}
console.log(`Broj ${k} je deljiv sa ${delj} brojeva`);

//2 nacin

k = 12;

if (k == 1) {
    delj = 1;
}
else {
    delj = 2;
    for (i = 2; i <= k / 2; i++) {
        if (k % i == 0) {
            delj++;
        }
    }
}
console.log(`Broj ${k} je deljiv sa ${delj} brojeva`);

//Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.

//1 nacin

n = 13;
delj = 0;

for (i = 1; i <= n; i++) {
    if (n % i == 0) {
        delj++;
    }
}
if (delj == 2) {
    console.log(`Broj ${n} je prost.`);
}
else {
    console.log(`Broj ${n} je slozen.`);
}

//2 nacin

let prost = true;
k = 13;
for (i = 2; i <= Math.sqrt(k); i++) {
  if (k % i == 0) {
    prost = false;
    break;
  }
}
if (prost) {
  console.log(`Broj ${k} je prost.`);
} else {
  console.log(`Broj ${k} je složen.`);
}

// Napraviti tabelu sa 6 redova.
//Svaki red tabele treba da ima po dve ćelije (dve kolone).
//Svakom parnom redu dodati klasu „obojen“.
//Korišćenjem CSS-a, klasi obojen postaviti proizvoljnu boju pozadine. 

let divTabela = document.getElementById('tabela');

let tabela = `<table>`;

for (i = 1; i <= 6; i++) {
    let obojen = 'belo';
    if (i % 2 == 0) {
        obojen = 'roze';

    }
    tabela +=
    `<tr class = "${obojen}">
        <td>Tekst</td>
        <td>Tekst</td>
    </tr>`
}
tabela += `</table>`;
divTabela.innerHTML = tabela;








