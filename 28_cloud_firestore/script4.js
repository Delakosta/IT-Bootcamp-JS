// Dohvatanje dokumenta iz kolekcije po redosledu polja. Mora da sadrzi to polje da bi bio dohvacen

db.collection('Users')
.orderBy('name', 'desc')
.orderBy('age', 'asc')
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e => {
    console.log(`Error: ${e}`);
});

// Dohvacanje odredjenog broja dokumenata

db.collection('Users')
.orderBy('name', 'desc')
.orderBy('age', 'asc')
.limit(2)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e => {
    console.log(`Error: ${e}`);
});


// Dohvatanje dokumenata koji zadovoljavaju odredjene uslove (filtriranje)

db.collection('Customers')
.where('salary', '>=', 60000)
.where('salary', '<=', 90000)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e => {
    console.log(`Error: ${e}`);
});

// Imaju platu manju od 900, i imaju 30 godina,

db.collection('Customers')
.where('salary', '<=', 90000)
.where('age', '==', 30)
.orderBy('salary')
.orderBy('name')
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e => {
    console.log(`Error: ${e}`);
});

// Dohvati sve klijente koji imaju preko 25 god, sortirane po imenu

db.collection('Customers')
.where('age', '>', 25)
.orderBy('age')
.orderBy('name')
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e => {
    console.log(`Error: ${e}`);
});

// Dohvati sve klijente koji imaju adresu u Nisu

db.collection('Customers')
.where('address', 'array-contains', 'Nis')
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e => {
    console.log(`Error: ${e}`);
});

// Imaju adresu u Nišu ili Beogradu,

db.collection('Customers')
.where('address', 'array-contains-any', ['Nis','Beograd'])
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e => {
    console.log(`Error: ${e}`);
});

// Imaju 22, 25 ili 28 godina.

db.collection('Customers')
.where('age', 'in', [22, 25, 28])
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e => {
    console.log(`Error: ${e}`);
});

// Iz kolekcije tasks, pročitati sve zadatke, sortirane po nazivu.

db.collection('tasks')
.orderBy('title')
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e => {
    console.log(`Error: ${e}`);
});

// Su prioritetni,

db.collection('tasks')
.where('priority', '==', true)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e => {
    console.log(`Error: ${e}`);
});

// Treba da se izvrše u tekućoj godini,

let datum = new Date();
let godina  = datum.getFullYear(); // tekuca godina
let datum1 = new Date(godina, 0 , 1); // 1 januar tekuce godine
let datum2 = new Date(godina + 1, 0, 1); // 1 jaunar sledece godine
let ts1 = firebase.firestore.Timestamp.fromDate(datum1); // ovo izgleda da ne mora
let ts2 = firebase.firestore.Timestamp.fromDate(datum2);

db.collection('tasks')
.where('due_date', '>=', ts1)
.where('due_date', '<', ts2)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e => {
    console.log(`Error: ${e}`);
});

// Su završeni,

datum = new Date();
console.log(datum)
//ts1 = firebase.firestore.Timestamp.fromDate(datum1);

db.collection('tasks')
.where('due_date', '<=', datum)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e => {
    console.log(`Error: ${e}`);
});

// Tek treba da počnu.

db.collection('tasks')
.where('start_date', '>', datum)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e => {
    console.log(`Error: ${e}`);
});

// Koje je režirao George Lucas,

db.collection('Movies')
.where('Director.Name', '==', "George")
.where('Director.Surname', '==', "Lucas")
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e => {
    console.log(`Error: ${e}`);
});

// Čija je ocena između 5 i 10,

db.collection('Movies')
.where('Rating', '>=', 5)
.where('Rating', '<=', 10)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e => {
    console.log(`Error: ${e}`);
});

// Kojima je žanr komedija, tragedija ili drama,

db.collection('Movies')
.where('Genres', 'array-contains-any', ["Comedy", "Tragedy", "Drama"])
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e => {
    console.log(`Error: ${e}`);
});

// Koji su izašli u 21. veku.

db.collection('Movies')
.where('Relese_year', '>=', 2001)
.where('Relese_year', '<=', 2100)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(e => {
    console.log(`Error: ${e}`);
});

// Prikazati sve informacije o najbolje rangiranom filmu.

db.collection("Movies")
  .orderBy("Rating", "desc")
  .limit(1)
  .get()
  .then(snapshot => {
    snapshot.forEach(doc => {
      let data = doc.data();
      console.log(data);
    });
  })
  .catch(err => {
    console.log(`Error: ${err}`);
  });