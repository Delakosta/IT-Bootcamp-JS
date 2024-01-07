let fs = document.getElementsByClassName('fs');
let kont = document.getElementById('kont')
let btnStart = document.getElementById('start');
let btnPosalji = document.getElementById('posalji');
let btnNovaPitanja = document.getElementById('nova');

/* Napravio sam funkciju za generisanje testa na sledeci nacin. Imam konstantu bazaPitanja koja sadrzi niz svih objekta (pitanja i odgovora) koje sam smestio u odvojen .js fajl zbog preglednosti. Pri pokretanju funkcije bazaPitanja se prekopira u promenljivu pitanja. Zatim u promenljivoj ind generisem ceo random broj od 0 do 49. Taj broj koristim kao index random pitanja koje iscupam splice metodom iz promenljive pitanja i smestim u promenlju test. Ovo ponovim 5x uz pomoc for petlje. Posto splice cupa pitanje iz promenljive pitanja cak i ako bi se generisao isti random broj, index pitanja u promeljivoj vise nije isti tako da ne moze da se dobije dva puta isto pitanje. Pri sledecem generisanju pitanja se ponovo izvlace iz kompletne baze.*/

let generisanjeTesta = test => {
    const bazaPitanja = [pitanje1, pitanje2, pitanje3, pitanje4, pitanje5, pitanje6, pitanje7, pitanje8, pitanje9, pitanje10, pitanje11, pitanje12, pitanje13, pitanje14, pitanje15, pitanje16, pitanje17, pitanje18, pitanje19, pitanje20, pitanje21, pitanje22, pitanje23, pitanje24, pitanje25, pitanje26, pitanje27, pitanje28, pitanje29, pitanje30, pitanje31, pitanje32, pitanje33, pitanje34, pitanje35, pitanje36, pitanje37, pitanje38, pitanje39, pitanje40, pitanje41, pitanje42, pitanje43, pitanje44, pitanje45, pitanje46, pitanje47, pitanje48, pitanje49, pitanje50];
    let pitanja = bazaPitanja;
    for (let i = 0; i < 5; i++) {
        let ind = Math.floor(Math.random() * pitanja.length);
        test[i] = pitanja.splice(ind, 1)[0];
    }
};

let test = [];
generisanjeTesta(test);
let id = 100;
for (let i = 0; i < test.length; i++) {
    fs[i].innerHTML = `<h3>${i+1}. ${test[i].tekst}</h3>`;
    test[i].odgovori.forEach((odg, j) => {
        if (j == test[i].indeksKorektnogOdgovora) {
            fs[i].innerHTML += `<p><input type="radio" id="${id}" name="odgovori${i}" value="${test[i].indeksKorektnogOdgovora}"><label for="${id}">${odg}</label></p>`;  
            id++;
        }   
        else {
            fs[i].innerHTML += `<p><input type="radio" id="${id}" name="odgovori${i}"><label for="${id}">${odg}</label></p>`;
            id++;
        }
    });
}
document.querySelectorAll('fieldset p:first-of-type input').forEach(odg => {
    odg.checked = true;
});

btnPosalji.addEventListener('click', () => {
    kont.style.display = "block";
    let br = 0;
    for (let i = 0; i < test.length; i++) {
        if (document.querySelector(`input[name ="odgovori${i}"]:checked`).value == test[i].indeksKorektnogOdgovora) {
            kont.innerHTML += `<p style= "color: green;"><img src="img/tacno.png" alt="tacno"> Tačno ste odgovorili na ${i+1}. pitanje.</p>`;
            fs[i].style.border = "4px solid green";
            br++;
        }
        else {
            kont.innerHTML += `<p style= "color: red;"><img src="img/netacno.png" alt="netacno"> Niste tačno odgovorili na ${i+1}. pitanje.</p>`;
            fs[i].style.border = "4px solid red";
        }
    }
    kont.innerHTML += `<h3>Ukupno tačnih odgovora: ${br}</h3>`;
    btnPosalji.style.display = "none";
    document.querySelectorAll('input').forEach(r => {
        r.disabled = true;
    });
    kont.scrollIntoView();
});

btnNovaPitanja.addEventListener('click', () => {
    fs[0].scrollIntoView();
    window.location.reload();
});