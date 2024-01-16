// DOM
let liZadaci = document.querySelectorAll('li');
let btnDodaj = document.querySelector('#submit');
let inputZadatka = document.querySelector('#task');
let ulZadaci = document.querySelector('ul');
let btnKraj = document.getElementById('r2');


ulZadaci.addEventListener('click    ', (e) => {
    if (e.target.tagName == "LI") {
        //e.target.classList.toggle('precrtaj');
        e.target.remove();
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
            }
            else {
                ulZadaci.prepend(liNoviZadatak);
            }
        }
        inputZadatka.value = "";
    }
});