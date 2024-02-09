import Chatroom from "./chat.js";
import ChatUI from "./ui.js";

let username = JSON.parse(localStorage.getItem('username'));
if (username === null) {
    username = "Anonymus";
}

let room = JSON.parse(localStorage.getItem('room'));
if (room === null) {
    room = "#general";
}

// DOM
let ul = document.querySelector("section ul");
let btnUpdate = document.getElementById('btnUpdate');
let btdSend = document.getElementById('btnSend');
let inpUser = document.getElementById('inpUser');
let inpChange = document.getElementById('inpChange');
let btnNav = document.querySelector('nav');

// Objekti
let chatroom = new Chatroom(room, username);
let chatui =  new ChatUI(ul);

// Prikaz poruka na stranici
chatroom.getChats(data => {
    chatui.list.appendChild(chatui.templateLi(data));
});


btdSend.addEventListener('click', () => {
    if (inpUser.value.trim() != "") {
        chatroom.addChat(inpUser.value);
    }
    else {
        alert("Empty message!")
    }
    inpUser.value = "";
});

btnUpdate.addEventListener('click', () => {
    let newUsername = inpChange.value;
    if (chatroom.username === newUsername) {
        alert(`Same username!`)
    }
    else {
        chatroom.username = newUsername;
        let usrNameMsg = document.createElement('span');
        usrNameMsg.textContent = `Username changed to: ${newUsername}`;
        localStorage.setItem('username', JSON.stringify(newUsername));
        ul.appendChild(usrNameMsg);
        setTimeout(() => {
            usrNameMsg.textContent = "";
            }, 3000);
    }
    inpChange.value = "";
});

btnNav.addEventListener('click', (e) => {
    if (e.target.name === 'room') {
        if (e.target.id === 'general') {
            chatui.clear();
            chatroom.room = "#general";
        }
        else if (e.target.id === 'js') {
            chatui.clear();
            chatroom.room = "#js";
        }
        else if (e.target.id === 'homeworks') {
            chatui.clear();
            chatroom.room = "#homeworks";
        }
        else if (e.target.id === 'tests') {
            chatui.clear();
            chatroom.room = "#tests";
        }
        localStorage.setItem('room', JSON.stringify(chatroom.room));
        chatroom.getChats(data => {
            chatui.list.appendChild(chatui.templateLi(data));
        });
    }
});