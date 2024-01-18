// DOM
let liZadaci = document.querySelectorAll('li');
let btnDodaj = document.querySelector('#submit');
let inputZadatka = document.querySelector('#task');
let ulZadaci = document.querySelector('ul');
let btnKraj = document.getElementById('r2');

let nizZadataka = [];
if(localStorage.getItem("zadaci") == null) {
    // nepostoje zadaci jos uvek
    localStorage.setItem("zadaci", JSON.stringify(nizZadataka));
}
else {
    // postoje zadaci u memoriji i treba ih ispisati
    nizZadataka = JSON.parse(localStorage.getItem("zadaci")); // pretvaram iz stringa u niz
    nizZadataka.forEach(zadatak => {
        let liZad = document.createElement("li"); // kreiramo ovi li
        liZad.textContent = zadatak; // upisujemo u li tekstualni sadrzaj
        ulZadaci.append(liZad); // dodajemo li na kraju ul
    });
}

ulZadaci.addEventListener('click', (e) => {
    if (e.target.tagName == "LI") {
        //e.target.classList.toggle('precrtaj');
        e.target.remove();
        let indeksElementa = nizZadataka.indexOf(e.target.textContent);
        nizZadataka.splice(indeksElementa, 1);
        localStorage.setItem("zadaci", JSON.stringify(nizZadataka));
    }
});

inputZadatka.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        let tekstZadatka = inputZadatka.value;
        if (tekstZadatka.trim() == "") {
            alert(`Unesi novi zadatak`);
        }
        else {
            let liNoviZadatak = document.createElement('li'); // kreiram novi li
            liNoviZadatak.textContent = tekstZadatka;
            if (btnKraj.checked) {
                ulZadaci.append(liNoviZadatak);
                nizZadataka.push(tekstZadatka); // dodajemo na kraj niza
            }
            else {
                ulZadaci.prepend(liNoviZadatak);
                nizZadataka.unshift(tekstZadatka); // dodajemo na pocetak niza
            }
        }
        localStorage.setItem("zadaci", JSON.stringify(nizZadataka));
        inputZadatka.value = ""; // isprazni input polje
    }
});