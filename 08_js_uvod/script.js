document.getElementById("d1").innerHTML = "Ja se zovem Uros.";
console.log("Pera"); console.log('Mika');
console.log("It's alright")
console.log('It\'s alright')

// Literali
console.log(5);
console.log(-5.189);
console.log(3+4); // 7
console.log("3"+"4"); // Konkatencija (spajanje stringova) "34"
console.log("3+4");
console.log("3+4 =" , 3+4);
console.log("3+4 =" + (3+4));
console.log(true);
console.log(false);

//Proimenljive

let x; // 1) deklaracija promenljve (uvodjenje promenljive u program)

x = 5;
console.log(x);

x = "Laza";
console.log(x);

let y = true; // 2) definicija promenljive (deklaracija + dodela vrednosti)
console.log(y);

const z = 9; // konstantna vrednost (ne moze se menjati)
console.log(z);

let age;
console.log(age, age + 3); // undefined, NaN - not a number

age = null;
console.log(age, age + 3); // null, 3

let broj = 3 + 4 * 2; // 11
console.log(broj);

broj = (3 + 4) * 2; // 14
console.log(broj);

broj += 6; // 20
console.log(broj);

broj *= 5; // 100
console.log(broj);

x = 6;

x++; // 7
console.log(x);

++x; //8
console.log(x);

x = 6;
console.log(x++); // post-increment (prvo se iskori stara vrednost promenljive x, pa se onda uveca)
console.log(x);
console.log(++x); // pre-increment (prvo se uveca stara vrednost promenljive x, pa se onda koristi)

// Beba ima 28 meseci
// 28 dekimo sa 12, i trazimo kolicnik i ostatak

// Kolicnik:
console.log(Math.floor (28 / 12)); //2

// Ostatak
console.log(28 % 12); //4

console.log(7 % 3); //1
console.log(24 % 18); //6

x = 5;
y = 3;
console.log(x ** y); // 5^3 = 5 * 5 * 5 = 125