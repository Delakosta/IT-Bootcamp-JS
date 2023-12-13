// klasicne odnosno imenovane funkcije
function sum(a, b) {
    return a + b;
}

let rez = sum(1, 2) // poziv funkcije po imenu, iza kog se navode argumenti
console.log(rez);

// anonimne funkcije (funkcije bez imana)

let suma = function(a, b) {
    return a + b;
}

console.log(this); // poziv anonimne funkcije

// arrow funkcije (anonimne funkcije koje imaju dva sprecificna svojstva)
// 1) imaju skracen zapis
// 2) znacenje kljucne reci this

let suma2 = (a, b) => {
    console.log(this);
    return a + b;
}

console.log(suma2(1 ,2));


let hello = () => {
    console.log("Hello world");
}

hello();
hello();

let echo = (s1, s2) => {
    let result = s1 + ", " + s2;
    console.log(result);
}

echo("Uros", "Kostadinovic");