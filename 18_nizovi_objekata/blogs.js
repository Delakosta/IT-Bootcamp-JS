let blog1 = {
    title: "IF naredba granjanja!",
    likes: 50,
    dislikes: 21
};
let blog2 = {
    title: "While petlja",
    likes: 25,
    dislikes: 36
};
let blog3 = {
    title: "For petlja!",
    likes: 100,
    dislikes: 12
};
let arrBlogs = [blog1, blog2, blog3];

// Ispis niza objekata
console.log(arrBlogs);

//Ispis jednog elementa iz niza objekata
console.log(arrBlogs[1]);

//Ispis jednog prop iz niza objekata

console.log(arrBlogs[1].title);
console.log(arrBlogs[1]['title']);

// Ispis naslova svih elementata iz niza koriscenjem for petlje

for (let i = 0; i < arrBlogs.length; i++) {
    console.log(arrBlogs[i].title);
};

// Ispis naslova svih elementata iz niza koriscenjem forEach petlje

blog2.title = "While ciklus";

arrBlogs.forEach( obj => {
    console.log(obj.title);
});

// Zadatak 1 - Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća ukupan broj lajkova

let sumLikes = niz => {
    let sum = 0;
    niz.forEach(obj => {
        sum += obj.likes;
    });
    return sum;
};
console.log(`Suma lajkova je ${sumLikes(arrBlogs)}`);

// Zadatak 2 - Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova

let avgLikes = niz => {
    let s = sumLikes(niz);
    let n = niz.length;
    let avg = s / n;
    return avg;
};
console.log(`Prosecan broj lajkova je ${avgLikes(arrBlogs)}`);

// Zadatak 3 - Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena

let naslovi = niz => {
    niz.forEach( obj => {
        if (obj.likes > obj.dislikes) {
            console.log(obj.title);
;        }
    });
}
naslovi(arrBlogs);

// Zadatak 4 - Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena

let nasloviDuplo = niz => {
    niz.forEach( obj => {
        if (obj.likes >= obj.dislikes * 2) {
            console.log(obj.title);
        }
    });
};
nasloviDuplo(arrBlogs);



// Zadatak 5 - Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom

let uzvicnik = niz => {
    niz.forEach(obj => {
        if (obj.title.endsWith('!')) {
            console.log(obj.title);
        }
    });
};
uzvicnik(arrBlogs);