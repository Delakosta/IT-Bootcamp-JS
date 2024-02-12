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
    templateLi(obj, cr) {
        let li = document.createElement('li');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let img = document.createElement('img');
        p1.innerHTML = `<span>${obj.username}:</span> ${obj.message}`;
        p2.textContent = this.formatDate(obj);
        img.src = 'img/trash.png';
        img.alt = "delete icon";
        if (obj.username == cr.username) {
            li.classList.add("user");
            img.id = obj.id;
        }
        else {
            li.classList.add("other");
            img.classList.add("tempRemove");
        }
        li.append(p1, p2, img);
        return li;
    }
    formatDate(obj) {
        let date = new Date(obj.created_at.toDate());
        let currentDate = new Date();
        let year = date.getFullYear();
        let month = String(date.getMonth() + 1).padStart(2, "0");
        let day = String(date.getDate()).padStart(2, "0");
        let hour = String(date.getHours()).padStart(2, "0");
        let min = String(date.getMinutes()).padStart(2, "0");
        let formatedDate = `${day}.${month}.${year}. - ${hour}:${min}`;
        let formatedDateToday = `${hour}:${min}`;
        if (currentDate.getDate() == date.getDate() &&
            currentDate.getMonth() == date.getMonth() &&
            currentDate.getFullYear() == date.getFullYear()) {
            return formatedDateToday;
        }
        else {
            return formatedDate;
        }
    }
    clear() {
        this.list.innerHTML = "";
    }
}


export default ChatUI;