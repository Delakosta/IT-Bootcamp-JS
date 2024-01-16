let liZadaci = document.querySelectorAll('li');

liZadaci.forEach(li => {
    li.addEventListener('click', () => {
        if (li.style.textDecoration == "line-through") {
            li.style.textDecoration = "none";
        }
        else {
            li.style.textDecoration = "line-through";
        }
    });
});

// toogle nacin

/*

liZadaci.forEach(li => {
    li.addEventListener(`click`, () => {
        li.classList.toggle(`precrtaj`); // dodati klasu .precrtaj u css-u
    });
});

*/