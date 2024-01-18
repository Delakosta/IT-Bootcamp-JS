// Pamcenje /Upisivanje /Smestanje u lokalnoj memoriji

localStorage.setItem("ime", "Stefan");
localStorage.setItem("grad", "Nis");

// Izmena /Update u lokalnoj memoriji

localStorage.setItem("grad", "Leskovac"); // Ukoliko postoji key vrsi se update, ukjoliko ne postoji vrsi se upis

// Preuzimanje iz loklane memorije

let unetoIme = localStorage.getItem("ime");

console.log(unetoIme);
console.log(localStorage.getItem("grad"));

console.log(localStorage.getItem("godine")); // vraca null jer kljuc godine ne postoji u LS

localStorage.removeItem("grad"); // brise iz LS po zadataom kljucu