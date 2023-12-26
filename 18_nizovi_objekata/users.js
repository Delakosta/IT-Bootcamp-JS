let blog1 = {
    title: "IF naredba granjanja",
    likes: 50,
    dislikes: 21
};
let blog2 = {
    title: "While petlja",
    likes: 25,
    dislikes: 36
};
let blog3 = {
    title: "For petlja",
    likes: 100,
    dislikes: 12
};

////////////////////////////////////////////////////////////////

let user1 = {
    username: "Uros Kostadinovic",
    age: 34,
    blogs: [blog1, blog3],
    logBlogs: function() {
        this.blogs.forEach(blog => {
            console.log(blog.title);
        });
    }
};

let user2 = {
    username: "Ivan Kostadinovic",
    age: 29,
    blogs: [blog2],
    logBlogs: function() {
        this.blogs.forEach(blog => {
            console.log(blog.title);
        });
    }
};

////////////////////////////////////////////////////////////////

console.log(user1.blogs);
console.log(user1.blogs[0].title);
console.log(user1.blogs[0]['title']);

user2.logBlogs();


// 1 Zadatak - Napraviti niz korisnika gde svaki od korisnika sadrži niz blogova. Svaki blog u ovom nizu je objekat.

let users = [user1, user2];

// Ispis username polja iz useres niza

users.forEach(u => {
    console.log(u.username);
});


// Ispis svih naslova blogova koje su korisnici kreirali

users.forEach(u => {
    u.logBlogs();
});

// Da nema metode

users.forEach(u => {
    u.blogs.forEach(b => {
        console.log(b.title);
    });
});


// Zadatak 3 - Ispisati naslove onih blogova koji imaju više od 50 lajkova

users.forEach(u => {
    u.blogs.forEach(b => {
        if (b.likes > 50) {
            console.log(b.title);
        }
    });
});


// Zadatak 2 - Ispisati imena onih autora koji imaju ispod 18 godina

users.forEach(u => {
    if (u.age < 18) {
        console.log(u.username);
    }
});

// Zadatak 4 - Ispisati sve blogove autora čiji je username ’JohnDoe’

users.forEach(u => {
    if(u.username == "JohnDoe") {
        console.log(u.blogs);
    }
});

// Zadatak 5 - Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali

users.forEach(u => {
    let sumLikes = 0;
    u.blogs.forEach(b => {
        sumLikes += b.likes;
    });
    if (sumLikes > 100) {
        console.log(u.username);
    }
});

// Zadatak 6 - Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena

let sum = 0;
let br = 0;
users.forEach(u => {
    u.blogs.forEach(b => {
        sum += b.likes;
        br++;
    });
});
let prosek = sum / br;
users.forEach(u => {
    u.blogs.forEach(b => {
        if(b.likes > prosek) {
            console.log(b.title);
        }
    });
});

// Zadatak 7 - Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena i ispodprosečan broj negativnih ocena

sum = 0;
let sumN = 0;
br = 0;
users.forEach(u => {
    u.blogs.forEach(b => {
        sum += b.likes;
        sumN += b.dislikes;
        br++;
    });
});
prosek = sum / br;
let prosekN = sumN / br;
users.forEach(u => {
    u.blogs.forEach(b => {
        if(b.likes > prosek && b.dislikes < prosekN) {
            console.log(b.title);
        }
    });
});

///////////////////////////////////////////
let dan1 = {
    datum: "2023/12/22",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [-3, -4, -6, -7, -6, -4, -10, 0]
};
let dan2 = {
    datum: "2023/12/24",
    kisa: false,
    sunce: true,
    oblacno: false,
    temperature: [3, 4, 6, 7, 9, 8, 5, 3]
};
let dan3 = {
    datum: "2023/12/25",
    kisa: false,
    sunce: true,
    oblacno: true,
    temperature: [3, 4, 6, 6, 7, 5, 4, 3]
};
///////////////////////////////////////////

// Zadatak 1 - Napraviti niz dan objekata (podsetiti se objekta dan sa 14. slajda i kreirati nekoliko takvih objekata)

let dani = [dan1, dan2, dan3];


// Zadatak 2 - Napraviti arrow funksiju koja ispisuje datum u kome je najviše puta izmerena temperatura. Ukoliko ima više takvih datuma:
// Ispisati prvi od njih
// Ispisati poslednji od njih

let maxBrMerenja = dani[0].temperature.length;

dani.forEach(d => {
    if (maxBrMerenja < d.temperature.length) {
        maxBrMerenja = d.temperature.length;
    }
});

// Ispisati svaki takav datum

dani.forEach(d => {
    if (d.temperature.length == maxBrMerenja) {
        console.log(d.datum);
    }
});

// Ispisati prvi od njih

for (let i = 0; i < dani.length; i++) {
    if (dani[i].temperature.length == maxBrMerenja) {
        console.log(dani[i].datum);
        break;
    }
};


// Ispisati poslednji od njih

for (let i = dani.length - 1; i >= 0; i--) {
    if (dani[i].temperature.length == maxBrMerenja) {
        console.log(dani[i].datum);
        break;
    }
};