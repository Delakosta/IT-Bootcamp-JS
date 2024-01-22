let getJSON = resource => {

    const request = new XMLHttpRequest(); // 1. Kreiranje XML objekta
    request.open('GET', resource); // 2. Otvaramo kreirani zahtev
    request.send(); // 3. Slanje poziva

    return new Promise((resolve, reject) => {
        request.addEventListener("readystatechange", () => {
            if (request.readyState == 4 && request.status == 200) {
                // sve ok
                let data = JSON.parse(request.responseText);
                resolve(data);
            }
            else if (request.readyState == 4) {
                // Nesto nije ok
                reject(`Desila se greska`);
            }
        });
    });
}

getJSON("../JSON/prvi.json").then(sadrzaj => {
    console.log("prvi.json", sadrzaj);
    return getJSON("../JSON/drugi.json"); // Vraca instancu Promise, kojamoze imati .then i .catch
}).then(sadrzaj2 => {
    console.log("drugi.json", sadrzaj2); // Ako je drugi.json resolved onda ispisuje njegove podatke
    return getJSON("../JSON/treci.json");
}).then(sadrzaj3 => {
    console.log("treci.json", sadrzaj3);
}).catch(greska => {
    console.log("Rejected:", greska); // Ako ma jedan fajl bio rejected, upada u catch granu
});




/*
getJSON("../JSON/prvi.json", (data, err) => {
    if (data) {
        console.log(data); // sve je prosle ok i vraca podatke (data)
        // ako je sve biko ok sa prvim fajlom, onda uzmi drugi json fajl
        getJSON("../JSON/drugi.json", (data, err) => {
            if (data) {
                console.log(data); // sve je prosle ok i vraca podatke (data) iz drugog json fajla
                getJSON("../JSON/treci.json", (data, err) => {
                    if (data) {
                        console.log(data); // sve je prosle ok i vraca podatke (data) iz treceg json fajla
                    }
                    else {
                        console.log(err); // ispisuje gresku iz treceg json fajla
                    }
                });
            }
            else {
                console.log(err); // ispisuje gresku iz drugog json fajla
            }
        });
    }
    else {
        console.log(err); // ispisuje gresku
    }
});

console.log(`KRAJ FAJLA`);
*/