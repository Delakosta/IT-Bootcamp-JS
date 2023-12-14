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
    if (n % 7 == 1) {
        return "ponedeljak"
    }
    else if (n % 7 == 2) {
        return "utorak"
    }
    else if ( n % 7 == 3) {
        return "sreda"
    }
    else if ( n % 7 == 4) {
        return "cetvrtak"
    }
    else if ( n % 7 == 5) {
        return "petak"
    }
    else if ( n % 7 == 6) {
        return "subota"
    }
    else {
        return "nedelja"
    }
}
let dan = sedmiDan(1);
console.log(`Danas je ${dan}`);

// Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.
// Prebrojati koliko ima ovakvih brojeva od n do m.

function deljivSaTri(n, m) {
    let br = 0;
    for (let i = n; i <= m; i++) {
        if (i % 3 == 0) {
            console.log(i);
            br++;
        }
    }
    console.log(`Brojeva deljivih sa tri ima ${br}`);
}

deljivSaTri(1, 10);



// Napisati funkciju sumiraj koja određuje sumu brojeva od n do m. 
// Brojeve n i m proslediti kao parametre funkciji.

function sumiraj(n, m) {
    let suma = 0;
    for (n; n <= m; n++) {
        suma += n;
    }
    return suma;
}
console.log(sumiraj(1, 100));



// Napisati funkciju množi koja određuje i vraća proizvod brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.

function mnozi(n, m) {
    let proizvod = 1;
    for (n; n <= m; n++) {
        proizvod *= n;
    }
    return proizvod;
}
console.log(mnozi(1, 10));



//Napraviti funkciju aritmeticka koja vraća aritmetičku sredinu brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.

function aritmeticka(n, m) {
    let suma = 0;
    let br = 0;
    for (n; n <= m; n++) {
        suma += n;
        br++;
    }
    let rezultat = suma / br;
    return rezultat;
}
console.log(`Aritmeticka sredina brojeva je ${aritmeticka(1, 20)}`);



// Napisati funkciju aritmetickaTri koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.

function aritmetickaTri(n, m) {
    let suma = 0;
    let br = 0;
    for (n; n <= m; n++) {
        if (n % 10 == 3) {
            suma += n;
            br++;
        }
    }
    let rezultat = suma / br;
    return rezultat;
}
console.log(`Aritmeticka sredina brojeva kojima je poslednja cifra tri je ${aritmetickaTri(1, 20)}`);



// Napisati funkciju velicinaFonta kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.

function velicinaFonta(n) {
    document.write(`<p style="font-size: ${n}px">Velicina fonta za ovaj paragraf je ${n}</p>`);
}

velicinaFonta(30);



// Napisati funkciju recenica5 koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora. 

function recenica5() {
    for (i = 1; i <= 5; i++) {
        document.write(`<p style="font-size: ${i}em">Recenica br ${i}</p>`);
    }
}
recenica5();



/* Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara. Brojeve n, a i d određujete sami.
Napišite funkciju poslednjaPlata kojoj se prosleđuju brojevi n, a i d. Funkcija treba da vrati kolika će vam plata biti poslednjeg meseca prakse, ukoliko svakog meseca budete dobijali povišicu.
Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).
Napišite funkciju ukupnaPlata kojoj se prosleđuju brojevi n, a i d. Funkcija treba da vrati vrednost koliko ćete ukupno navca zaraditi na praksi, ukoliko svakog meseca budete dobijali povišicu.
Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).*/

// a - plata
// n - meseci
// d - povisica


function poslednjaPlata(n, a, d) {
    let povisice = 0;
    for (i = 2; i <= n; i++) {
        povisice += d;
    }
    return povisice + a;
}
console.log(`Poslednja plata ce biti: ${poslednjaPlata(5, 10000, 10000)}`);


function ukupnaPlata(n, a, d) {
    let plata = a;
    for (i = 2; i <= n; i++) {
            a += d;
            plata += a;
        }
    return plata;
}
console.log(`Ukupna plata je: ${ukupnaPlata(5, 10000, 10000)}`);


/* Na igrama bez granica, ekipi je postavljen zadatak da za što kraće vreme pređe stazu na kojoj se nalazi pokretni most. Takmičaru ove ekipe od polazne tačke do mosta treba t sekundi. Tačno p sekundi od kada takmičar može da krene sa polazne tačke (tj. od početka merenja) most počinje da se podiže. Ukoliko takmičar pre podizanja mosta kroči na most, zadržaće ga svojom težinom i most se neće podići tj. takmičar će moći nesmetano da pređe most. Od trenutka podizanja pa do spuštanja mosta protiče n sekundi i prelaz preko mosta za to vreme nije moguć. Nakon toga most ostaje spušten. Takmičari za čekanje kod mosta dobijaju negativne poene, pa je tim rešio da napravi program koji će im tačno odrediti u kojoj sekundi treba da pođu sa startne pozicije kako ne bi dobijali negativne poene. Pomozite timu da napravi funkciju na osnovu prosleđenih vrednosti t, p i n. Funkcija vraća koliko sekundi nakon početka merenja vremena treba da pođe, kako bi prošli poligon bez zaustavljanja.
npr: t=15, p=20, n=25, čekanje je 0s
npr: t=15, p=10, n=12, čekanje je 7s */


function igreBezGranica(t, p, n) {
    if (t < p || t > p + n) {
        console.log(`Cekanje je 0 sekundi`);
    }
    else {
        let cekanje = p + n - t;
        console.log(`Cekanje je ${cekanje} sekundi`)
    }
}

igreBezGranica(15, 10 , 12);