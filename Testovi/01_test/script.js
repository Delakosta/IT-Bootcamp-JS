let datum = new Date();
let dan = datum.getDay();
let sat = datum. getHours();
let min = datum.getMinutes();

if (dan === 6 || dan === 0) {
    let naslov = document.getElementById('naslov');
    naslov.innerHTML = "Odmarate? ITBootcamp vam nudi mogućnost da stičete nove veštine! " + "(" + sat + ":" + min + ")";
} else {
    naslov = document.getElementById('naslov');
    naslov.innerHTML = "Radite? ITBootcamp vam nudi mogućnost da se okrenete novoj profesiji! " + "(" + sat + ":" + min + ")";
}