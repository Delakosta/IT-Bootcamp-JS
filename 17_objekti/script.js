let blog1 = {
    title: "HTML",
    content: "Osnovni HTML tagovi",
    author: "Uros",
    likes: 10,
    comments: true
};

// Ispis objekta

console.log(blog1);
console.log(typeof blog1);

// Ispis odredjene osobine

console.log(blog1.title);
console.log(blog1.author);
console.log(blog1['content']);

// Izmena odredjene osobine

blog1.content = "HTML tabele";
console.log(blog1);
blog1['content'] = "HTML liste"
console.log(blog1);


//////////////////////////////////////////////////

let user1 = {
    username: "UrosKostadinovic",
    age: 34,
    blogs: ["Naredba granjanja", "Nizovi", "Objekti"],
    login: function() {
        console.log(`Ulogovani ste`);
        console.log(this);
    },
    logout: function() {
        console.log(`Izlogovani ste`)
    },
    logBlogs: function() {
        this.blogs.forEach(el => {
            console.log(el);
        })
    },
    hello: function() {
        return `Hello ${this.username}`;
    }
};
user1.login();
user1.logout();
user1.logBlogs();
console.log(user1.hello());
console.log(this);

user1.blogs.forEach(blog => {
    document.write(`<p>${blog}</p>`)
});


let dan1 = {
    datum: "2023/12/22",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [3, 4, 6, 7, 6, 4],
    // 1.
    prosecna: function() {
        let suma = 0;
        this.temperature.forEach(t => {
            suma += t;
        });
        return suma / this.temperature.length;
    },
    // 2.
    brNatprosecnih: function() {
        let br = 0;
        let pros = this.prosecna();
        this.temperature.forEach(t => {
            if (t > pros) {
                br++;
            }
        });
        return br;
    },
    // 3.
    brMaksimalnih: function() {
        let br = 0;
        let max = this.temperature[0];
        this.temperature.forEach(t => {
            if (t > max) {
                max = t;
            }
        });
        this.temperature.forEach(t => {
            if (t == max) {
                br++;
            }
        });
        return br;
    },
    // 4.
    dveTemp: function(a, b) {
        let br = 0;
        if (a > b) {
            let pom = a;
            a = b;
            b = pom;
        }
        this.temperature.forEach(t => {
            if (t > a && t < b) {
                br++;
            }
        });
        return br;
    },
    // 5.
    iznadProseka: function() {
        let br = 0;
        let avg = this.prosecna();
        this.temperature.forEach(t => {
            if (t > avg) {
                br++;
            }
        });
        if (br > this.temperature.length / 2) {
            return true;
        }
        else {
            return false;
        }
    },
    // 6.
    ledenDan: function() {
        let leden = true;
        this.temperature.forEach(t => {
            if (t > 0) {
            leden = false;
            }
        });
        return leden;
    },
    // 8.
    nepovoljan: function() {
        for (let i = 0; i < this.temperature.length - 1; i++) {
            if (Math.abs(this.temperature[i] - this.temperature[i+1]) > 8) {
                return true;
            }
        }
        return false;
    }
};
console.log(`Prosecna temperatura je ${dan1.prosecna()}`);
console.log(`Broj natprosecnih merenja u danu je ${dan1.brNatprosecnih()}`);
console.log(`Merenja sa maksimalnom termperaturom: ${dan1.brMaksimalnih()}`);
console.log(`Broj merenja izmedju zadatih temperatura je: ${dan1.dveTemp(3, 5)}`);
console.log(`U vecini dana temperatura je bila iznad proseka - ${dan1.iznadProseka()}`);
console.log(`Dan je bio leden - ${dan1.ledenDan()}`);
console.log(`Da li je dan nepovoljan? ${dan1.nepovoljan()}`);