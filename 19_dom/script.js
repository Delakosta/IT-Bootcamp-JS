console.log(document); // document je objekat (koren DOM stabla)
console.log(document.body); // body svojstvo document objekta je objekat

let e1 = document.getElementById('p2');
console.log(e1);

let el2 = document.getElementsByClassName('par');
console.log(el2); // HTML kolekcija objekata iz DOM stabla

// Pristup elementima HTML kolekcije

for (let i = 0; i < el2.length; i++) {
    console.log(el2[i]);
}

// HTML kolekcije ne poseduju forEach petlju
/*
el2.forEach(el => {
    console.log(el);
});
*/

let niz = Array.from(el2);
niz.forEach(el => {
    console.log(el);
});


let el3 = document.getElementsByTagName('p'); // Vraca HTML kolekciju
console.log(el3);

let el4 = document.getElementsByName('p'); // Vraca NodeList
console.log(el4);

el4.forEach(el => {
    console.log(el);
});


let t1 = document.querySelector('#p2');
console.log(t1);

let t2 = document.querySelector('.par'); // Vraca objekat iz DOM stabla
console.log(t2);

let t3 = document.querySelectorAll(".par");
console.log(t3);

t3.forEach(el => {
    console.log(el);
});

let t4 = document.querySelectorAll('div p.par');
console.log(t4);


// Dohvatiti prvi paragraf na stranici.

let prviP = document.querySelector('p');
console.log(prviP);

// Dohvatiti prvi div tag sa klasom „error“.

let divError = document.getElementsByClassName('div.error');
console.log(divError[0]);

// Dohvatiti poslednji red u tabeli.

let tab = document.getElementsByTagName('tr');

console.log(tab[tab.length - 1]);

// Dohvatiti sve linkove na stranici.

let link = document.getElementsByTagName('a');
console.log(link);

// Dohvatiti sve slike na stranici.

let slike = document.getElementsByClassName('slika');
console.log(slike);



let link2 = document.querySelectorAll('a');     
link2.innerHTML = "<span style= 'font-weight: bold'>Novi tekst</span> prvog linka";
link2.href = "https://www.google.com";
//link2.setAttribute("href", "https://www.google.com");


console.log(e1.parentNode);
console.log(e1.childNodes);