const btnProveri = document.getElementById("proveri");
const btnProveri2 = document.getElementById("proveri2");
const inputPolje = document.getElementById("polje");
const tekstPolje = document.getElementById("tekstPolje");
const brojPolje1 = document.getElementById("brojPolje1");
const brojPolje2 = document.getElementById("brojPolje2");
const divIspis = document.getElementById("ispis");
const divIspis2 = document.getElementById("ispis2");

let dohvatiJSON = adresa => {
    return new Promise((resolve, reject) =>{
        let request = new XMLHttpRequest();
        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status === 200) {
                let data = JSON.parse(request.responseText);
                resolve(data);
            }
            else if (request.readyState === 4) {
                reject("Desila se greska!");
            }
        });
        request.open("GET", adresa);
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
    }).then(data => {
        let ukupnaCena = 0;
        if (ukupnaTezina > Number(inputPolje.value)) {
            divIspis.innerHTML = "Not enought capacity in truck!";
        }
        else {
            let tabela = document.createElement("table");
            divIspis.append(tabela);
            data.forEach(artikal => {
                if (nizArtikala.includes(artikal.id)) {
                    ukupnaCena += artikal.price;
                    let tr = document.createElement("tr");
                    let td1 = document.createElement("td");
                    let td2 = document.createElement("td");
                    tabela.append(tr);
                    td1.textContent = artikal.item;
                    td2.textContent = artikal.price;
                    tr.append(td1, td2);
                }
            });
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            tabela.append(tr);
            td1.textContent = "UKUPNO";
            td2.textContent = ukupnaCena;
            tr.append(td1, td2);
        }
    })
    .catch(poruka => {
        divIspis.innerHTML = poruka;
    });
}

let posaljiUpit2 = e => {
    e.preventDefault();
    nizArtikala = [];
    prvaKolona = [];
    drugaKolona = [];
    trecaKolona = [];
    dohvatiJSON("../JSON/stock.json")
    .then(data => {
        data.forEach(artikal => {
            if (artikal.stock > 0 && artikal.item.includes(tekstPolje.value)) {
                nizArtikala.push(artikal.id);
                prvaKolona.push(artikal.item);
                drugaKolona.push(artikal.stock);
            }
        });
        return dohvatiJSON("../JSON/prices.json");
    })
    .then(data => {
        data.forEach(artikal => {
            if (nizArtikala.includes(artikal.id)) {
                trecaKolona.push(artikal.price);  
            }
        });
        let tabela = document.createElement("table");
        divIspis2.append(tabela);
        for (let i = 0; i < trecaKolona.length; i++) {
            if (trecaKolona[i] > brojPolje1.value && trecaKolona[i] < brojPolje2.value) {
                let tr = document.createElement("tr");
                let td1 = document.createElement("td");
                let td2 = document.createElement("td");
                let td3 = document.createElement("td");
                tabela.append(tr);
                td1.textContent = prvaKolona[i];
                td2.textContent = drugaKolona[i];
                td3.textContent = trecaKolona[i];
                tr.append(td1, td2, td3);
            }
        }
    })
    .catch(poruka => {
        divIspis2.innerHTML = poruka;
    });
}


btnProveri.addEventListener('click', posaljiUpit);
btnProveri2.addEventListener('click', posaljiUpit2);