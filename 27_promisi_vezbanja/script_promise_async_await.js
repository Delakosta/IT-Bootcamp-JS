const form = document.querySelector("#order");
const capacity = document.querySelector("#capacity");
const div = document.querySelector("#result");

/*
1) Odrediti artikle koji vise nisu na stanju
2) Odrediti ukupnu tezinu svih thi artikala
3) Ako je ta tezina manja od kapaciteta kamiona, onda:
    a) Odrediti i ispisati ukupnu cenu svih tih artikla
    b) Inace, ispisati poruku da kamion nema trazeni kapacitet
*/

function getItemsReturnPromise(resource) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.addEventListener("readystatechange", function() {
            if (request.readyState === 4 && request.status === 200) {
                // sve ok, obradi zahtev
                let data = JSON.parse(request.responseText);
                resolve(data); // radi nesto sa podacima koji su stigli sa servera
            }
            else if (request.readyState === 4) {
                // desila se greska
                reject("Desila se greska");
            }
        });
        request.open("GET", resource);
        request.send();
    });
}

async function clickGetItems() {
    nizArtikala = [];
    let data1 = await getItemsReturnPromise("JSON/stock.json");
    data1.forEach(artikal => {
        if (artikal.stock == 0) {
            nizArtikala.push(artikal.id);
        }
    });
    let data2 = await getItemsReturnPromise("JSON/weights.json");
    let ukupnaTezina = 0;
    data2.forEach(artikal => {
        if (nizArtikala.includes(artikal.id)) {
            ukupnaTezina += artikal.weight;
        }
    });
    if (ukupnaTezina <= Number(capacity.value)) {
        let data3 = await getItemsReturnPromise("JSON/prices.json");
        let ukupnaCena = 0;
        data3.forEach(artikal => {
            if (nizArtikala.includes(artikal.id)) {
                ukupnaCena += artikal.price;
            };
        });
        return ukupnaCena;
    }
    else {
        return "Nema dovoljno mesta u kamionu!"
    }
}

function submitFormaVarijanta3(e) {
    e.preventDefault();
    clickGetItems()
    .then(data => {
        div.innerHTML = data;
    })
    .catch(err => {
        div.innerHTML = err;
    })
}

form.addEventListener("submit", submitFormaVarijanta3);