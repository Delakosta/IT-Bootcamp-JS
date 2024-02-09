class ChatUI {
    constructor(l) {
        this.list = l;
    }
    set list(l) {
        this._list = l;
    }
    get list() {
        return this._list;
    }
    templateLi(obj) {
        let li = document.createElement('li');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        p1.innerHTML = `<span>${obj.username}:</span> ${obj.message}`;
        p2.textContent = this.formatDate(obj);
        li.append(p1, p2);
        return li;
    }
    formatDate(obj) {
        let date = new Date(obj.created_at.toDate());
        let year = date.getFullYear();
        let month = String(date.getMonth() + 1).padStart(2, "0");
        let day = String(date.getDay()).padStart(2, "0");
        let hour = String(date.getHours()).padStart(2, "0");
        let min = String(date.getMinutes()).padStart(2, "0");
        let formatedDate = `${day}.${month}.${year} - ${hour}:${min}`;
        return formatedDate;
    }
    clear() {
        this.list.innerHTML = "";
    }
}


export default ChatUI;