let cars = ["Toyota", "BMW", "Volvo"]

console.log(cars);

let razno = [15, -3.5, "hello", false, [1, 2, 3]];

console.log(razno);
console.log(razno[0]);
console.log(razno[2]);


let niz = [];
niz[1] = "Pera";
niz[4] = "Ivana";
// niz[] = "Lena"  - indeks mora biti dodeljen
niz[1] = "Zika";

console.log(niz);

for (i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

for (i = 0; i < razno.length; i++) {
    console.log(razno[i]);
}




let unutrasnjiNiz = razno[4];
for(i = 0; i < unutrasnjiNiz.length; i++)
{
    console.log(unutrasnjiNiz[i]);
}


for (i = 0; i < razno[4].length; i++) {
    console.log(razno[4][i]);
}




let brojevi = [4, 3.5, 8, 10];
// uvecati zbir svih elemenata za 10%

for (i = 0; i < brojevi.length; i++) {
    brojevi[i] *= 1,1;
}

for (i = 0; i < brojevi.length; i++) {
    console.log(brojevi[i]);
}