import Film from "./film.js";

let film1 = new Film("Cuvari formule", "Dragan Bjelogrlic", 2023, [9, 10, 8, 6, 10, 10, 9]);
let film2 = new Film("Klopka", "Srdjan Golubovic", 2007, [9, 9, 9, 8, 7, 10, 10, 8, 6]);
let film3 = new Film("Maratonci trce pocasni krug", "Slobodan Sijan", 1982, [8, 9, 8, 8, 9]);
let filmovi = [film1, film2, film3];

film1.stampaj();
filmovi[2].stampaj();

console.log(`Ispis for petljom`);

for (let i = 0; i < filmovi.length; i++) {
    filmovi[i].stampaj();
}

console.log(`Ispis forEach petljom`);


filmovi.forEach(film => {
    film.stampaj();
});

console.log(film3);

console.log(`Prosecna ocena filma ${film1.naslov} je: ${film1.prosecna()}`);

// Napraviti funkciju vekFilmova kojoj se prosleđuje niz filmova i ceo broj (vek), a funkcija ispisuje samo one filmove koji su stvoreni u prosleđenom veku
// 1801 - 1900 - 19 vek
// 1901 - 2000 - 20 vek
// 2001 - 2100 - 21 vek

let vekFilmova = (niz, vek) => {
    niz.forEach(film => {
        let vekFilma = Math.ceil(film.godinaIzdanja / 100);
        if (vekFilma == vek) {
            film.stampaj();
        }
    });
}
vekFilmova(filmovi, 21);

// Napraviti funkciju prosecnaOcena kojoj se prosleđuje niz filmova, a koja određuje i vraća  prosečnu ocenu svih filmova.

let prosecnaOcena = niz => {
    let suma = 0;
    let br = 0;
    niz.forEach(film => {
        film.ocene.forEach(ocena => {
            suma += ocena;
            // br++;
        });
        br += film.ocene.length;
    });
    return suma / br;
}
console.log(prosecnaOcena(filmovi));

// Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni (veća im je prosečna ocena) od prosleđene ocene.

let iznadOcene = (niz, o) => {
    let nizFilmova = [];
    niz.forEach(film => {
        if (o < film.prosecna()) {
            nizFilmova.push(film);
        }
    });
    return nizFilmova;
}
console.log(iznadOcene(filmovi, 6));

// Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba da na ekranu da ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocenu.

let iznadOceneNoviji = (niz, o) => {
    let nizFilmova = iznadOcene(niz, o);
    let naj = 0;
    let najFilm = "";
    nizFilmova.forEach(film => {
        if (film.godinaIzdanja > naj) {
            naj = film.godinaIzdanja;
            najFilm = film;
        }
    });
    najFilm.stampaj();
}
iznadOceneNoviji(filmovi, 8);

// Napisati funkciju najcescaOcena kojoj se prosleđuje niz filmova, a ona vraća ocenu koju su filmovi najčešće dobijali (u opticaju su ocene 5, 6, 7, 8, 9 i 10). 

let najcescaOcena = niz => {
    let pet = 0;
    let sest = 0;
    let sedam = 0;
    let osam = 0;
    let devet = 0;
    let deset = 0;
    niz.forEach(film => {
        film.ocene.forEach(ocena => {
            switch(ocena) {
                case 5:
                    pet++;
                    break;
                case 6:
                    sest++;
                    break;
                case 7:
                    sedam++;
                    break;
                case 8:
                    osam++;
                    break;
                case 9:
                    devet++;
                    break;
                case 10:
                    deset++;
                    break;
            }
        });
    });
    let nizOcena = [pet, sest, sedam, osam, devet, deset];
    let max = nizOcena[0];
    let maxIndex = 0;
    for (let i = 0; i < nizOcena.length; i++) {
        if (max < nizOcena[i]) {
            max = nizOcena[i];
            maxIndex = i;
        }
    }
    return maxIndex + 5;
}
console.log(najcescaOcena(filmovi));

// Napraviti funkciju najboljeOcenjeni kojoj se prosleđuje niz filmova, a ona vraća najbolje ocenjeni film (film koji ima najveću prosečnu ocenu).

let najboljeOcenjeniFilm = niz => {
    let najboljeOcenjeni = niz[0];
    let najboljaOcena = najboljeOcenjeni.prosecna();
    niz.forEach(film => {
        if (film.prosecna() > najboljaOcena) {
            najboljaOcena = film.prosecna();
            najboljeOcenjeni = film;
        }
    });
    return najboljeOcenjeni;
}
console.log(najboljeOcenjeniFilm(filmovi));

// Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.

let najmanjaOcenaNajboljeg = niz => {
    let najboljiFilm = najboljeOcenjeniFilm(niz);
    let najmanjaOcena = najboljiFilm.ocene[0];
    najboljiFilm.ocene.forEach(ocena => {
        if (ocena < najmanjaOcena) {
            najmanjaOcena = ocena;
        }
    });
    console.log(najmanjaOcena);
}
najmanjaOcenaNajboljeg(filmovi);

// Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova.

let osrednjiFilm = niz => {
    let prosecnaSvi = prosecnaOcena(niz);
    let najbliza = Math.abs(prosecnaSvi - niz[0].prosecna());
    let najbliziFilm = "";
    niz.forEach(film => {
        if (Math.abs(prosecnaSvi - film.prosecna()) < najbliza) {
            najbliza = Math.abs(prosecnaSvi - film.prosecna());
            najbliziFilm = film;
        }
    });
    return najbliziFilm.naslov;
}
console.log(`Najblizi prosecnoj oceni svih filmova je film: ${osrednjiFilm(filmovi)}`);

// Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio.

let najmanjaOcena = niz => {
    let najmanja = niz[0].ocene[0];
    niz.forEach(film => {
        film.ocene.forEach(ocena => {
            if (ocena < najmanja) {
                najmanja = ocena;
            }
        });
    });
    return najmanja;
}
console.log(`Najmanja ocena je: ${najmanjaOcena(filmovi)}`);
