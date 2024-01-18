window.setTimeout(() => {
    console.log(`Ispis nakon 3 sekunde`);
}, 3 * 1000);   

console.log(1);
console.log(2);

window.setTimeout(() => {
    console.log(`Ispis nakon nekog vremena`);
}, 2 * 1000);

console.log(3);
console.log(4);


const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const div = document.getElementById("ispis");

let timer = null;

btn1.addEventListener('click', (e) => {
    e.preventDefault();
    let datum = new Date();
    let sat = datum.getHours();
    let min = datum.getMinutes();
    let sek = datum.getSeconds();
    if (timer === null) {
        timer = setTimeout(function() {
        div.innerHTML += `<p>${sat}:${min}:${sek}</p>`;
        timer = null;
        }, 2000);
    }
});

btn2.addEventListener('click', (e) => {
    e.preventDefault();
    clearTimeout(timer);
    timer = null;
});