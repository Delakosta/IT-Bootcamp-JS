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

function submitFormaVarijanta2(e) {
    e.preventDefault();
    let nizArtikala = [];
    getItemsReturnPromise("JSON/stock.json")
    .then(data => {
        data.forEach(artikal => {
            if ( artikal.stock == 0) {
                nizArtikala.push(artikal.id);
            }
        });
        return getItemsReturnPromise("JSON/weights.json");
    })
    .then(data => {
        let ukupnaTezina = 0;
        data.forEach(artikal => {
            if (nizArtikala.includes(artikal.id)) {
                ukupnaTezina += artikal.weight;
            }
        });
        if (ukupnaTezina <= Number(capacity.value)) {
            return getItemsReturnPromise("JSON/prices.json");
        }
        else {
            div.innerHTML = "Not enough capacity in the truck!";
        }
    })
    .then(data => {
        if (data !== undefined) {
            let ukupnaCena = 0;
            data.forEach(artikal => {
                if (nizArtikala.includes(artikal.id)) {
                    ukupnaCena += artikal.price;
                }
            });
            div.innerHTML = `Ukupna cena artika: ${ukupnaCena}`;
        }
    })
    .catch(msg => {
        div.innerHTML = msg;
    });
}


form.addEventListener("submit", submitFormaVarijanta2);