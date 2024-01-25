let inputPolje = document.getElementById('inputPolje');
let btnProveri = document.getElementById('btnProveri');
let divIspis = document.getElementById('divIspis');

let dohvatiJSON = adresa => {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                let data = JSON.parse(request.responseText);
                resolve(data);
            }
            else if (request.readyState === 4) {
                reject("Desila se greska!")
            }
        });
        request.open('GET', adresa);
        request.send();
    });
}

let posaljiUpit = e => {
    e.preventDefault();
    let nizArtikala = [];
    let ukupnaTezina = 0;
    dohvatiJSON("../JSON/stock.json")
    .then(data => {
        data.forEach(artikal => {
            if (artikal.stock == 0) {
                nizArtikala.push(artikal.id);
            }
        });
        return dohvatiJSON("../JSON/weights.json");
    })
    .then(data => {
        data.forEach(artikal => {
            if (nizArtikala.includes(artikal.id)) {
                ukupnaTezina += artikal.weight;
            }
        });
        return dohvatiJSON("../JSON/prices.json");
    })
    .then(data => {
        let ukupnaCena = 0;
        if (ukupnaTezina > inputPolje.value) {
            divIspis.innerHTML = "Nema dovoljno mesta u kamionu!"
        }
        else {
            data.forEach(artikal => {
                if (nizArtikala.includes(artikal.id)) {
                ukupnaCena += artikal.price;
                }
            });
            divIspis.innerHTML = `Ukupna cena je : ${ukupnaCena}`;
        }
    })
    .catch(poruka => {
        divIspis.innerHTML = poruka;
    });
}

btnProveri.addEventListener('click', posaljiUpit);