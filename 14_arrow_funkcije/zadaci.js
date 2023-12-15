// Zadatak 3

// Varijanta 1 - klasicne funkcije

function neparan(n) {
    let x;
    if (n % 2 == 1) {
        x = true;
    }
    else {
        x = false;
    }
    return x;
}
let p = 5;
console.log(neparan(p));


function neparan2(n) {
    if (n % 2 == 1) {
        var x = true;
    }
    else {
        var x = false;
    }
    return x;
}
p = 5;
console.log(neparan2(p));



// Varijanta 2 - arrow funkcije

let neparan3 = (n) => {
    let x = false;
    if (n % 2 == 1) {
        x = true;
    }
    return x;
}

let neparan4 = (n) => {
    return (n % 2 == 1) ? true : false; // ?: ternarni operator
}

console.log(neparan4(6));



let neparan5 = (n) => {
    return (n % 2 == 1);
}
console.log(neparan5(6));



let neparan6 = n => (n % 2 == 1);

console.log(neparan6(6));



let uvecajZaDva = n => (n += 2);

console.log(uvecajZaDva(5));





//Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja. U oba slučaja, brojevi su međusobno različiti.


let = maks2 = (n, m) => (n > m) ? n : m;

console.log(maks2(25, 20));



let maks4 = (a, b, c, d) => maks2(maks2(a, b), maks2(c,d));

console.log(maks4(25, 10, 15, 4));



/* Napisati funkciju koja vraća sliku za prosledjenu adresu slike. Rezultat poziva iskoristiti da sliku prikažete u browseru.
Drugi zadatak izmenite na sledeći način:
Funkcija se ne menja. Samo u html fajlu, unutar body taga, dodajte div sa pozadinskom plavom bojom, i neka sadrži neki tekst. Onda u javascriptu pozovite ovu funkciju, i njen rezultat dodatje u div tag (znači da u div tagu ostane tekst, samo da se doda sličica posle teksta).*/


let prikaziSliku = (adresa) => (`<img src= "${adresa}">`);



document.getElementById('d1').innerHTML += prikaziSliku("https://stock.wikimini.org/w/images/6/60/W-200x200-300dpi.png");


// Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.


let tekstParagrafa = (boja) => {
    document.getElementById('p1').style.color = boja;
}

tekstParagrafa("blue");


// Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.
// Prebrojati koliko ima ovakvih brojeva od n do m.

let deljivSaTri = (n, m) => {
    let br = 0;
    for (let i = n; i <= m; i++) {
        if (i % 3 == 0) {
            console.log(i);
            br++;
        }
    }
    console.log(`Ukupno deljivih brojeva sa 3 od ${n} do ${m} ima: ${br}`);
}

deljivSaTri(30, 45);



// Napisati funkciju sumiraj koja određuje i vraća sumu brojeva od n do m. 
// Brojeve n i m proslediti kao parametre funkciji.


let sumiraj = (n, m) => {
    let suma = 0;
    for (let i = n; i <= m; i++) {
        suma += i;
    }
    return suma;
}
console.log(sumiraj(2, 5));






