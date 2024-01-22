function getUsers(resolve, reject) {
    let request = new XMLHttpRequest();
    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status === 200) {
            //sve ok
            // 1. dohvati podatke
            let data = JSON.parse(request.responseText);
            // 2. pozovi callback funkciju koja obradjuje podatke
            resolve(data);
        }
        else if (request.readyState === 4) {
            reject("Desila se greska");
        }
    });
    request.open('GET', 'https://jsonplaceholder.typicode.com/users');
    request.send();
}

// Zadatak 2

function zad2(niz) {
    niz.forEach(user => {
        if (user.website.includes(".com")) {
            document.body.innerHTML += user.website + "<br>";
        }
    });
}

function ispisString(str) {
    document.body.innerHTML += str + "<br>";
}

getUsers(zad2, ispisString) // poziv funkicje getUsers

// Zadatak 3

getUsers(niz => {
    niz.forEach(user => {
        if (user.company.name.includes("Group") || user.company.name.includes("LLC")) {
            document.body.innerHTML += user.company.name + "<br>";
        }
    });
}, poruka => {
    document.body.innerHTML += poruka + "<br>";
});