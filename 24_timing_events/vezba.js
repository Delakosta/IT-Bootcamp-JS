const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const div = document.querySelector('#ispis');

let timer;

btn1.addEventListener('click', (e) => {
    e.preventDefault();
    if (timer === undefined) {
        timer = setTimeout(() => {
            const datum = new Date();
            let sat = datum.getHours();
            let min = datum.getMinutes();
            let sek = datum.getSeconds();
            sat = (sat < 10) ? "0" + sat : "" + sat;
            min = (min < 10) ? "0" + min : "" + min;
            sek = (sek < 10) ? "0" + sek : "" + sek;
            div.innerHTML += `<p>${sat}:${min}:${sek}</p>`;
            timer = undefined;
        }, 2000);
    }
});

btn2.addEventListener('click', (e) => {
    e.preventDefault();
    clearTimeout(timer);
    timer = undefined;
});

function prikaziSat() {
    const datum = new Date();
    let sat = datum.getHours();
    let min = datum.getMinutes();
    let sek = datum.getSeconds();
    sat = (sat < 10) ? "0" + sat : "" + sat;
    min = (min < 10) ? "0" + min : "" + min;
    sek = (sek < 10) ? "0" + sek : "" + sek;
    div.innerHTML = `<p>${sat}:${min}:${sek}</p>`;
}

let clock;

btn3.addEventListener('click', (e) =>{
    e.preventDefault();
    if (clock === undefined) {
        clock = setInterval(prikaziSat, 1000 / 2);
    }
});

btn4.addEventListener('click', (e) => {
    e.preventDefault();
    clearInterval(clock);
    clock = undefined;
});