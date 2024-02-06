let datum = new Date();

class Chatroom {
    constructor(r, u) {
        this.room = r;
        this.username = u;
        this.chats = db.collection('chats');
    }
    set room(r) {
        this._room = r;
    }
    get room () {
        return this._room;
    }
    set username(u) {
        if (u.length >= 2 && u.length <= 10 && u.trim() != " ") {
            this._username = u;
        }
        else {
            alert("Korisnicko ime mora biti izmedju 2 i 10 karaktera!")
        }
    }
    get username() {
        return this._username;
    }
    addChat(message) {
        this.chats
        .add({
            message: message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(datum),
        })
        .then(() => {
            console.log("Uspesno dodat chat");
        })
        .catch((e) => {
            console.log(`Greska: ${e}`);
        });
    }
    async addChat2(msg) {
        // Kreiranje dokumenta koje zelimo da upisemo u bazu
        let docChat = {
            message: msg,
            username: this.username,
            room: this.room,
            created_at: new Date()
        }
        let response = await this.chats.add(docChat) // pamti odc u bazi
        return response // vraca promis, na koji moze da se zakaci .then i .catch
    }
    getChats(callback) {
        this.chats
        .where('room', '==', this.room)
        .orderBy('created_at')
        .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if (change.type == 'added') {
                        callback(change.doc.data());
                    }
                });
            });
    }
}

let korisnik1 = new Chatroom ('#general', 'milos123')
let korisnik2 = new Chatroom ('#js', 'buki')
let korisnik3 = new Chatroom ('#homework', 'pedja')

korisnik1.getChats(data => {
    console.log(data);
});