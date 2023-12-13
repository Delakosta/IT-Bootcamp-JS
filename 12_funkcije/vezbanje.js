// Napisati funkciju pozdrav kojoj se prosleđuje ime i prezime, a funkcija ispisuje pozdrav. Na primer za uneto ime Jelena i prezime Matejić, funkcija ispisuje Zdravo Jelena Matejić. 

function pozdrav(ime, prezime) {
    console.log(`Zdravo ${ime} ${prezime}`);
}

pozdrav("Uros", "Kostadinovic");

// Napisati funkciju zbir koja računa zbir dva realna broja.
// Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.

function zbir(a, b) {
    let rez = a + b;
    console.log(`${a} + ${b} = ${rez}`)
}

zbir(15, 25);

//Napisati funkciju neparan koja za uneti ceo broj n vraća tekst “Broj je neparan” ukoliko je u pitanju neparan broj ili vraća tekst “Broj je paran” ukoliko broj n nije neparan.

function neparan(n) {
    if (n % 2 == 0) {
        return "Broj je paran";
    }
    else {
        return "Broj je neparan";
    }
}

console.log(neparan(16));

// Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja. U oba slučaja, brojevi su međusobno različiti.

function maks2(a, b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}
console.log(maks2(15, 50));

function maks4(a, b, c, d) {
    let m = maks2(maks2(a, b), maks2(c, d));
    return m;
}

console.log(maks4(15, 20, 44, 55));

// Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.

function proslediSliku(adresa) {
    document.write(`<img src="${adresa}">`);
}

proslediSliku("https://www.monitor.rs/uploads_static/200x200/41065_18143154022.jpg");

// Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike i prosledjen id elementa u kome ta slika treba da se prikaze

function proslediSlikuId(adresa, id) {
    let slika = document.getElementById(id);
    slika.innerHTML = `<img src="${adresa}">`;
}
proslediSlikuId("https://www.monitor.rs/uploads_static/200x200/41065_18143154022.jpg", "slika1");

// Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.

function obojiParagraf(boja) {
    document.write(`<p style="color:${boja}"> Ovo je paragarf</p>`);
    let paragarf = document.getElementById("p1");
    paragarf.style.color = boja;
}

obojiParagraf("blue");

//Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n u konzoli ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
//Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?

function mesecGod(n) {
    if (n % 12 == 1) {
        return "januar";
    }
    else if (n % 12 == 2) {
        return "februar"
    }
    else if (n % 12 == 3) {
        return "mart"
    }
    else if (n % 12 == 4) {
        return "april"
    }
    else if (n % 12 == 5) {
        return "maj"
    }
    else if (n % 12 == 6) {
        return "jun"
    }
    else if (n % 12 == 7) {
        return "jul"
    }
    else if (n % 12 == 8) {
        return "avgust"
    }
    else if (n % 12 ==  9) {
        return "septembar"
    }
    else if (n % 12 == 10) {
        return "oktobar"
    }
    else if (n % 12 == 11) {
        return "novembar"
    }
    else {
        return "decembar"
    }
}
console.log(`Mesec u godini je ${mesecGod(12)}`);

// Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.
// Prebrojati koliko ima ovakvih brojeva od n do m.


function deljivSaTr(n, m) {
    let br = 0;
    for (n; n <= m; n++) {
        if (n % 3 == 0) {
            br++;
        }
    }
    return br;
}

console.log(`Deljivih brojeva sa 3 ima ${deljivSaTr(1, 15)}`);

// Napisati funkciju sumiraj koja određuje sumu brojeva od n do m. 
// Brojeve n i m proslediti kao parametre funkciji.

function sumiraj(n, m) {
    let suma = 0;
    for (n; n <= m; n++) {
        suma += n;
    }
    return suma;
}
console.log(`Rezultat je ${sumiraj(1, 100)}`);

// Napisati funkciju množi koja određuje proizvod brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.

function mnozi(n, m) {
    let proizvod = 1;
    for (n; n <= m; n++) {
        proizvod *= n;
    }
    return proizvod;
}
console.log(`Rezultat je ${mnozi(1, 5)}`);

// Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.

function arSredina(n, m){
    let zbir = 0;
    let br = 0;
    for (n; n <= m; n++) {
        zbir += n;
        br++;
    }
    let rez = zbir / br;
    return rez;
}
console.log(`Aritmeticka sredina brojeva je ${arSredina(1, 5)}`);

// Napisati funkciju koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.

function arSredina3(n, m) {
    let zbir = 0;
    let br = 0;
    for (n; n <= m; n++) {
        if (n % 10 == 3) {
            zbir += n;
            br++;
        }
    }
    let rez = zbir / br;
    return rez;
}
console.log(`Aritmeticka sredina brojeva kojima je poslednja cifra 3 je ${arSredina3(1, 20)}`);

// Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.

function tektsFont(n) {
    document.write(`<p style="font-size: ${n}px">Ovo je paragraf za velicinu fonta.</p>`);
}

tektsFont(50);

// Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora. 

function tektsFont5(tekst) {
    for (i = 1; i <= 5; i++) {
        document.write(`<p style="font-size: ${i}em">Ovo je paragraf za velicinu fonta.</p>`);
    }
}

tektsFont5("Ovo je neki tekst");

/*Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara. Brojeve n, a i d određujete sami.
 Napišite funkciju kojoj se prosleđuju brojevi n, a i d. Funkcija treba da vrati vrednost koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali povišicu.
 Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).*/

// n -mesec
// d - povisica
// a - plata


 function praksa(n, a, d) {
    let zaradjeno = 0;
    for (i = 1; i <= n; i++) {
        if (i == 1) {
            zaradjeno += a;
        }
        else {
            a += d;
            zaradjeno += a;
        }
    }
    return zaradjeno;
 }
 console.log(`Ukupno zaradjeno novca: ${praksa(7, 10000, 5000)}`);

 /*Na igrama bez granica, ekipi je postavljen zadatak da za što kraće vreme pređe stazu na kojoj se nalazi pokretni most. Takmičaru ove ekipe od polazne tačke do mosta treba t sekundi. Tačno p sekundi od kada takmičar može da krene sa polazne tačke (tj. od početka merenja) most počinje da se podiže. Od trenutka podizanja pa do spuštanja mosta protiče n sekundi i prelaz preko mosta za to vreme nije moguć. Nakon toga most ostaje spušten. Takmičari za čekanje kod mosta dobijaju negativne poene, pa je tim rešio da napravi program koji će im tačno odrediti u kojoj sekundi treba da pođu sa startne pozicije kako ne bi dobijali negativne poene. Pomozite timu da napravi funkciju na osnovu prosleđenih vrednosti t, p i n. Funkcija vraća koliko sekundi nakon početka merenja vremena treba da pođe, kako bi prošli poligon bez zaustavljanja.
npr: t=15, p=20, n=25, čekanje je 0s
npr: t=15, p=10, n=12, čekanje je 7s*/

