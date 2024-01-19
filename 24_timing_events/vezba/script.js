const btnStart = document.getElementById('start');
const btnStop = document.getElementById('stop');
const input = document.getElementById('polje');

let timer = null;
let br = 1;

btnStart.addEventListener('click', (e) => {
    e.preventDefault();
    if (timer === null) {
        timer = setInterval(() => {
            input.value = br++;
        }, 1000);
    }
});

btnStop.addEventListener('click', (e) => {
    e.preventDefault();
    clearInterval(timer);
    timer = null;
});