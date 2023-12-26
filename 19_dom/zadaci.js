// 1 

let paragrafi = document.querySelectorAll('p');
paragrafi.forEach(p => {
    p.innerHTML += "VAZNO!!!";
});

// 2

let divovi = document.querySelectorAll('div.error');
divovi.forEach(d => {
    d.innerHTML += "<h1>Greska!</h1>";
});

// 3

let n = paragrafi.length;

for (let i = 0; i < n; i++) {
    paragrafi[i].innerHTML += i ** 2;
};

// 4

let slike = document.querySelectorAll('img');

