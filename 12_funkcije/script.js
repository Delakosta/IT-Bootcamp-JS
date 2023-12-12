// Funckija za ispis u konzoli

function zdravo() {
        console.log("Hello world!")
}

zdravo(); // poziv funkcije
zdravo();



// Funkcija za ispis prosledjenog teksta u konzoli (1 parametar)

function ispisiTekst(tekst) {
    console.log(tekst);
}

ispisiTekst("Ovo je neki tekst");
ispisiTekst("Ovo je neki drugi tekst");
let t = "Moji tekst";

ispisiTekst(t);



// Funkcija kojoj se prosledjuju dva parametra

function imePrezime(ime, prezime, godine) {
    console.log(`Ulogovana osoba je ${ime} ${prezime}. Osoba ima ${godine} god`);
}

imePrezime("Uros", "Kostadinovic", 34);

let imeOsobe = "Stefan";
let prezimeOsobe = "Stanimirovic";
let godineOsobe = 34;

imePrezime(imeOsobe, prezimeOsobe, godineOsobe);



// Funkcija koja vrsi sabiranje dva broja

function zbir(br1, br2) {
    let rezulatat = br1 + br2;
    console.log(`${br1} + ${br2} = ${rezulatat}`);
}

zbir(80, 90);

let b1 = 15;
let b2 = 5;

zbir(b1, b2);



// Funkcija koja vraca vrednost

function razlika(umanjenik, umanjilac) {
    let razlikaRezultat = umanjenik - umanjilac;
    return razlikaRezultat;
}

console.log(`Razlika je: ${razlika(60, 45)}`);

let r = razlika(100, 4);
console.log(`Funkcija vraca: ${r}`);

let r1 = razlika(6, 3);
let r2 = razlika(17, 7);
let r3 = razlika(r1, r2);

console.log(`Promenljiva r3 iznosi: ${r3}`);

let r4 = razlika(razlika(40, 60), razlika(10, 4)); // razlika (-20, 6) = -26
console.log(`Promenljiva r4 iznosi: ${r4}`);



// Funckija sa vise return-a

//1 nacin

function temperaturaVode(temp) {
    if (temp <= 0) {
        return "Voda se ledi";
    }
    else if ( temp >= 100) {
        return "Voda isparava";
    }
    else {
        return "Voda je u tecnom stanju";
    }
}
let rezTempVode = temperaturaVode(114);
console.log(rezTempVode);
console.log(temperaturaVode(-15));

//2 nacin

function temperaturaVode1(temp) {
    let tekstZaIspis = "";
    if (temp <= 0) {
        tekstZaIspis = "Voda se ledi";
    }
    else if ( temp >= 100) {
        tekstZaIspis = "Voda isparava";
    }
    else {
        tekstZaIspis = "Voda je u tecnom stanju";
    }
    return tekstZaIspis;
}

console.log(temperaturaVode1(25));



// Zadatak 3 - Napisati funkciju neparan koja za uneti ceo broj n vraća tekst “Broj je neparan” ukoliko je u pitanju neparan broj ili vraća tekst “Broj je paran” ukoliko broj n nije neparan.

function neparan(n) {
    if (n % 2 != 0) {
        return "Broj je neparan"
    }
    else {
        return "Broj je paran"
    }
}
let br = neparan(20);
console.log(br);

// Zadatak 4 - Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

function maks2(i , j) {
    if (i > j) {
        return i;
    }
    else if (j > i) {
        return j;
    }
    else {
        return "Brojevi su jednaki.";
    }
}
let dvaBr = maks2(25, 35);
console.log(dvaBr);



// 2 deo

function maks4(a, b, c, d) {
    if (a > b && a > c && a > d) {
        return a;
    }
    else if (b > c && b > d) {
        return b;
    }
    else if (c > d) {
        return c;
    }
    else {
        return d;
    }
}
let cetiriBr = maks4(20, 2, 45, 4);
console.log(cetiriBr);



//Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.

function prikaziSliku(adresa) {
    document.write(`<img src="${adresa}">`);
}

prikaziSliku("https://www.monitor.rs/uploads_static/200x200/41065_18143154022.jpg");



// Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike i prosledjen id elementa u kome ta slika treba da se prikaze

function prikaziSlikuUelemntu(putanja, id) {
    let element = document.getElementById(id);
    element.innerHTML = `<img src ="${putanja}">`;
}

prikaziSlikuUelemntu("https://www.monitor.rs/uploads_static/200x200/41065_18143154022.jpg", "slika1")



// Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.

function bojaParagrafa (boja) {
        let paragraf = document.getElementById("p1").style.color = boja;
}

bojaParagrafa("rgb(200,150,100)");



/*Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n u konzoli ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?*/

function sedmiDan(n) {
    if (n == 6) {
        return "subota"
    }
    else if (n == 1) {
        return "ponedeljak"
    }
    else if ( n == 2) {
        return "utorak"
    }
    else if ( n == 3) {
        return "sreda"
    }
    else if ( n == 4) {
        return "cetvrtak"
    }
    else if ( n == 5) {
        return "petak"
    }
    else {
        return "nedelja"
    }
}
let dan = sedmiDan(9);
console.log(`Danas je ${dan}`);