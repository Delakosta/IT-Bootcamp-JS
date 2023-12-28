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
slike.forEach(slika => {
    slika.alt = "neki tekst";
});

// 5

paragrafi.forEach(p => {
    p.style.color = "purple";
});


// 6

for (let i = 0; i < paragrafi.length; i++) {
    if (i % 2 == 0) {
        paragrafi[i].style.backgroundColor = "green";
    }
    else {
        paragrafi[i].style.backgroundColor = "red";
    }
};

// 7

let link = document.querySelectorAll("a");
link.forEach((link, i) => {
    link.style.padding = "5px";
    link.style.fontSize = "8px"
    link.style.textDecoration = "none";
    if (i % 2 == 0) {
        link.style.color = "purple";
        link.style.backgroundColor = "green";
    }
    else {
        link.style.color = "white";
        link.style.backgroundColor = "blue";
    }
});

// 8

slike.forEach(slika => {
    if (slika.src.endsWith(".png")) {
        slika.style.border = "2px solid red";
    }
});

// 9 

link.forEach(link => {
    if (link.target == "_blank") {
        link.target = "_top";
    }
    else {
        link.target = "_blank";
    }
});

// 10

let imena = ["Uros", "Ana", "Vuk", "Snezana"];

for (let i = 0; i < imena.length; i++) {
    link[i].innerHTML = imena[i];
    if (imena[i].startsWith("S")) {
        link[i].target = "_blank";
    }
    else {
        link[i].target = "_self";
    }
};

let lista = document.getElementsByTagName("li");

for (let i = 0; i < imena.length; i++) {
    lista[i].innerHTML = imena[i];
    if (i % 2 == 0) {
        lista[i].style.color = "blue";
    }
    else {
        lista[i].style.color = "purple";
    }
};

let kolona = document.querySelectorAll("tr td:first-of-type");

for (let i = 0; i < kolona.length; i++) {
    kolona[i].style.border = "2px solid black";
    kolona[i].style.padding = "20px";
    kolona[i].style.marginTop = "15px";
};