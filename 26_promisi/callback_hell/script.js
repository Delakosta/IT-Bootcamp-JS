let getJSON = (resource, callback) => {
    // 1. Kreiranje XML objekta
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        if (request.readyState == 4 && request.status == 200) {
            // sve ok
            let data = JSON.parse(request.responseText);
            callback(data, undefined);
        }
        else if (request.readyState == 4) {
            // Nesto nije ok
            callback(undefined, `Desila se greska`);
        }
    });

    // Otvaramo kreirani zahtev
    request.open('GET', resource);
    // Slanje poziva
    request.send();
}

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