console.log(db);

let users = db.collection('users');
console.log(users);

let d1 = users.doc("ukostadinovic");
console.log(d1);
let d2 = db.doc("users/ukostadinovic");
console.log(d2);

// CRUD - Create, Read, Update, Delete
// doc.set(...)     ->   Create
// doc.get(...)     ->   Read
// doc.update(...)  ->   Update
// doc.delete(...)  ->   Delete
// Sve ove 4 metode kao rezultat vracaju PROMISE
// Nakon ovih poziva lancaju se .then() i .catch()

// 1. Create (set)

let customer4 = {
    name: "Mika",
    age: 38,
    address: "Bubanjska 23",
    salary: 55000
}; // JS objekat

db.collection('Customers').doc("customer4")
.set(customer4)
.then(() => {
    document.body.innerHTML += "Korisnik dodat u bazu"
})
.catch(e => {
    document.body.innerHTML += `Korisnik dodat u bazu ${e}`;
});