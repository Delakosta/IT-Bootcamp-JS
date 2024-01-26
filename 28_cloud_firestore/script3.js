let datum1 = new Date("2024-01-23 17:00:00");
let datum2 = new Date("2024-01-23 21:00:00");

db.collection('Tasks')
.add({
    title: "Cas IT Bootcamp",
    startDate: firebase.firestore.Timestamp.fromDate(datum1),
    dueDate: firebase.firestore.Timestamp.fromDate(datum2),
    priority: false,
    descrition: "Cas iz baza podataka"
})
.then(() => {
    console.log("Uspesno dodat task");
})
.catch((e) => {
    console.log(`Greska: ${e}`);
});

db.collection('Users').doc('customer5')
.update({  // menja sadrzaj postojeceg polja dok set kompletno menja sadrzaj dokumenta
    age: 31
})
.then(() => {
    console.log("Uspesno promenjene godine");
})
.catch((e) => {
    console.log(`Greska: ${e}`);
});


db.collection('movies').doc('IT')
.set({
    name: "IT",
    director: {
        ime: "Andres",
        prezime: "Muschietti"
    },
    relese_year: 2017,
    genres: ["Horror", "Drama"],
    rating: 7.3
})
.then(() => {
    console.log("Dodat film");
})
.catch((e) => {
    console.log(`Greska: ${e}`);
});

db.collection('movies').doc('Oppenheimer')
.set({
    name: "Oppenheimer",
    director: {
        ime: "Christopher",
        prezime: "Nolan"
    },
    relese_year: 2023,
    genres: ["History", "Drama"],
    rating: 8.4
})
.then(() => {
    console.log("Dodat film");
})
.catch((e) => {
    console.log(`Greska: ${e}`);
});

db.collection('movies').doc('Wonka')
.set({
    name: "Wonka",
    director: {
        ime: "Paul",
        prezime: "King"
    },
    relese_year: 2023,
    genres: ["Comedy", "Drama"],
    rating: 7.2
})
.then(() => {
    console.log("Dodat film");
    return db.collection('movies').doc('Wonka')
    .update({
        rating: 8.4
    });
})
.then(() => {
    console.log("Uspesno update-ovan rating");
})
.catch((e) => {
    console.log(`Greska: ${e}`);
});

// Dohvatanje dokumenta

db.collection('movies').doc('IT')
.get()
.then( doc => {
    if (doc.exists) {
        let data = doc.data();
        console.log("Uspesno skinut dokument: " + doc.id);
        console.log(data);
    }
    else {
        console.log("Ne postoji ovaj dokument")
    }
})
.catch(e => {
    console.log(`Greska: ${e}`);
});

// Dohvatanje svih dokumenata iz kolekcije

db.collection('Customers').get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(doc.id, " => ", data)
    });
})
.catch(e => {
    console.log(`Greska: ${e}`);
});