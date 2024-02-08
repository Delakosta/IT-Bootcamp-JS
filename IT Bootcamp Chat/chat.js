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
        if (u.length > 2 && u.length < 10 && u.trim() != " ") {
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
            created_at: firebase.firestore.Timestamp.fromDate(new Date()),
        })
        .then(() => {
            console.log("Uspesno dodat chat");
        })
        .catch((e) => {
            console.log(`Greska: ${e}`);
        });
    }
    getChats(callback) {
        this.chats
        .where('room', '==', this.room)
        .orderBy('created_at')
        .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                        callback(change.doc.data());
                });
            });
    }
    updateUsername(newUsername) {
        this.username = newUsername;
    }
    updateRoom(newRoom) {
        this.room = newRoom;
    }
}

export default Chatroom;