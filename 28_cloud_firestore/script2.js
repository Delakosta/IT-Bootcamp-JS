class User {
    constructor(n, s, a) {
        this.name = n;
        this.surname = s;
        this.age = a;
    }
};

User.prototype.bojaKose = "crna";

let ana = new User("Ana", "Dimitrijevic", 29);
ana.grad = "Leskovac";

let ivan = new User("Ivan", "Kostadinovic", 27);
ivan.poreklo = "Leskovac";

console.log(ana);
console.log(ana.bojaKose);


db.collection('Users').doc('ikostadinovic')
.set(Object.assign({}, ivan))
.then(() => {
    console.log("Uspesno dodat user");
})
.catch((e) => {
    console.log(`Greska ${e}`)
});



db.collection('Users').doc('customer5')
.set({
    name: "Branko",
    surname: "Milivojevic",
    age: 27,
    gard: "Nis"
})
.then(() => {
    console.log("Uspesno dodat user");
})
.catch((e) => {
    console.log(`Greska ${e}`)
});