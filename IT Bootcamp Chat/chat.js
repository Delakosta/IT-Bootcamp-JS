class Chatroom {
    constructor(r, u) {
        this.room = r;
        this.username = u;
        this.chats = db.collection('chats');
        this.unsub = false;
    }
    set room(r) {
        this._room = r;
        if (this.unsub) {
            this.unsub();
        }
    }
    get room () {
        return this._room;
    }
    set username(u) {
        this._username = u;
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
        this.unsub = this.chats
        .where('room', '==', this.room)
        .orderBy('created_at')
        .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if (change.type == 'added') {
                        callback(change.doc.data());
                        document.querySelector('li:last-of-type').scrollIntoView();
                    }
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