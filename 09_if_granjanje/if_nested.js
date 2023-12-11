/*Učitati dva cela broja i ispitati da li je veći od njih paran, a manji od njih deljiv sa 3.*/

let br1 = 8;
let br2 = 9;

if (br1 > br2) {
    console.log("Veci br je: " + br1);
    if (br1 % 2  == 0) {
        console.log("Veci broj je paran");
    } else {
        console.log("Veci broj nije paran");
    }
    if (br2 % 3 == 0) {
        console.log("Manji broj je deljiv sa tri");
    } else {
        console.log("Manji broj nije deljiv sa tri");
    }
}
else {
    console.log("Veci br je: " + br2);
    if (br2 % 2  == 0) {
        console.log("Veci broj je paran");
    } else {
        console.log("Veci broj nije paran");
    }
    if (br1 % 3 == 0) {
        console.log("Manji broj je deljiv sa tri");
    } else {
        console.log("Manji broj nije deljiv sa tri");
    }

}

// Nacin 2

br1 = 15;
br2 = 20;
let veci = br1;

if (br2 > veci) {
    veci = br2;
}
let manji = br1 + br2 - veci;

if (veci % 2 == 0) {
    console.log("Veci broj nije deljiv sa 2");
}
else {
    console.log("Veci broj nije deljiv sa 2");
}
 
if (manji % 3 == 0) {
    console.log("Manji broj je deljiv sa 3");
}
else {
    console.log("Manji broj nije deljiv sa 3");
}


/*Uneti dva datuma i ispisati onaj koji je raniji. Datume unosimo tako što u posebnim promenljivama navedemo dan, mesec i godinu, za svaki od njih. */

let dan1 = 15;
let mesec1 = 1;
let god1 = 2023;

let dan2 = 15;
let mesec2 = 1;
let god2 = 2023;

if (god1 < god2) {
    console.log(god1);
} else if (god2 < god1) {
    console.log(god2);
} else if (god1 == god2) {
    if (mesec1 < mesec2) {
        console.log(mesec1);
    } else if (mesec2 < mesec1) {
        console.log(mesec2);
    } else if (mesec1 == mesec2) {
        if (dan1 < dan2) {
            console.log(dan1);
        } else if (dan2 < dan1) {
            console.log(dan2);
        } else {
            console.log("Datumi su isti");
        }
    }
}


/*Napraviti program koji za uneti pol i broj godina korisnika ispisuje da li je korisnik muškarac ili žena i da li je punoletan*/


let pol = "z";
let god = 19;

if (pol == "m") {
    console.log("Korisnik je muskarac");
    if (god >= 18) {
    console.log("Korisnik je punoletan");
} else {
    console.log("Korisnik nije punoletan");
    }
}
else {
    console.log("Korisnik je zena");
    if (god >= 18)
    console.log("Korisnik je punoletan");
    else {
    console.log("Korisnik nije punoletan");
    }
}

