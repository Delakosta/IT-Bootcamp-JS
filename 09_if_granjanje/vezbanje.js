/*Za unetu zapreminu proizvoda, u paragrafu zelenom bojom ispisati “Pack up”, ukoliko je proizvod zapremine veće ili jednake 100ml. 
U suprotnom u paragrafu crvenom bojom ispisati “Throw away”.*/

let zapremina = 100;

if (zapremina <= 100) {
    let paragraf = document.getElementById(`p1`);
    paragraf.innerHTML = `Pack up!`;
    paragraf.style.color = `green`;
} else {
    paragraf = document.getElementById(`p1`);
    paragraf.innerHTML = `Trow away!`;
    paragraf.style.color = `red`;
}

/*Za unetu temperaturu u paragrafu, ispisati “Temperatura u plusu” crvenom bojom ili “Temperatura u minusu” plavom bojom. 
Ukoliko je temperatura nula, računati kao temperaturu u plusu.*/

let temp = 21;

if (temp >= 0) {
    document.write("<p style='color: red;'>Temperatura je u plusu</p>");
} else {
    document.write("<p style='color: blue;'> Temperature je u minusu</p>")
}

/*Za preuzetu godinu sa računara i unetu godinu rođenja izračunati da li osoba ove godine postaje punoletna. Ukoliko postaje, prikazati sliku torte sa brojem 18. U suprotnom, izračunati još koliko godina je preostalo do punoletstva i ispisati tu informaciju u paragrafu.*/

let datum = new Date();
let god = datum.getFullYear();
let godRodj = 2005;

if (god - godRodj >= 18) {
    document.write("<img src='https://kirbiecravings.com/wp-content/uploads/2022/03/4-ingredient-birthday-cake-2-200x200.jpg'>")
} else {
    console.log("Ostalo je jos " + (godRodj - god + 18) + " godina do punoletstva");
}

/*U odnosu na preuzeto trenutno vreme sa računara, u paragrafu ispisati da li je trenutno jutro ili popodne.
Popodne je kada prođe 12:00 sati, računajući i to vreme.*/

let vreme = datum.getHours();

if (vreme >= 12) {
    console.log("Podne je");
} else {
    console.log("Jutro je");
}

/*U odnosu na pol koji je korisnik uneo u promenljivu  
(“m” za muški pol ili “z” za ženski pol)  na ekranu prikazati odgovarajući avatar (odgovarajuću sličicu).*/

let user = "m";

if (user == "m" ) {
    document.write("<img src='https://static.vecteezy.com/system/resources/thumbnails/009/749/751/small/avatar-man-icon-cartoon-male-profile-mascot-illustration-head-face-business-user-logo-free-vector.jpg'>")
} else {
    document.write("<img src='https://static.vecteezy.com/system/resources/thumbnails/009/749/878/small/woman-profile-mascot-illustration-female-avatar-icon-cartoon-girl-head-face-business-user-logo-free-vector.jpg'>") 
}

