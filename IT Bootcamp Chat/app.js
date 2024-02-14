import Chatroom from "./chat.js";
import ChatUI from "./ui.js";

// DOM
const ul = document.querySelector('section ul');
const msgDiv = document.querySelector('div');
const btnUpdate = document.getElementById('btnUpdate');
const btnSend = document.getElementById('btnSend');
const btnSelectTheme = document.getElementById('btnSelectTheme');
const inpUserMsg = document.getElementById('inpUserMsg');
const inpChangeUser = document.getElementById('inpChangeUser');
const inpThemeColor = document.getElementById('inpThemeColor');
const nav = document.querySelector('nav');
const theme = document.querySelector('main');

let username = JSON.parse(localStorage.getItem('username'));
if (username === null) {
    username = "Me";
}

let room = JSON.parse(localStorage.getItem('room'));
if (room === null) {
    room = "#general";
}
let currentRoom = document.getElementById(room);
currentRoom.classList.add('pressed');


let color = JSON.parse(localStorage.getItem('color'));
if (color === null) {
    color = "#6E6EA080";
    inpThemeColor.value = "#6E6EA0";
}
else {
    inpThemeColor.value = color.slice(0, -2);
}
theme.style.backgroundColor = color;

// Objects
let chatroom = new Chatroom(room, username);
let chatui =  new ChatUI(ul);

// Display messages
function getChats() {
    chatroom.getChats(data => {
        chatui.list.appendChild(chatui.templateLi(data, chatroom));
        document.querySelector('li:last-of-type').scrollIntoView();
    });
};
getChats();

btnSend.addEventListener('click', () => {
    if (inpUserMsg.value.trim() != "") {
        chatroom.addChat(inpUserMsg.value);
    }
    else {
        alert("Empty message.")
    }
    inpUserMsg.value = "";
});

btnUpdate.addEventListener('click', () => {
    let newUsername = inpChangeUser.value;
    if (chatroom.username === newUsername) {
        alert(`Same username.`);
    }
    else if (newUsername.length < 2 || newUsername.length > 10 || newUsername.trim() == "") {
        alert("Username must be between 2 and 10 characters long.");
    }
    else {
        chatroom.username = newUsername;
        let usernameMsg = document.createElement('span');
        usernameMsg.textContent = `Username changed to: ${newUsername}`;
        localStorage.setItem('username', JSON.stringify(newUsername));
        msgDiv.appendChild(usernameMsg);
        setTimeout(() => {
            msgDiv.removeChild(usernameMsg);
            }, 3000);
        chatui.clear();
        getChats();
    }
    inpChangeUser.value = "";
});

nav.addEventListener('click', (e) => {
    if (e.target.name === 'room') {
        let buttons = document.getElementsByName('room');
        buttons.forEach(button => button.classList.remove('pressed'));
        e.target.classList.add('pressed');
        if (e.target.id === '#general') {
            chatui.clear();
            chatroom.room = "#general";
        }
        else if (e.target.id === '#friends') {
            chatui.clear();
            chatroom.room = "#friends";
        }
        else if (e.target.id === '#family') {
            chatui.clear();
            chatroom.room = "#family";
        }
        else if (e.target.id === '#work') {
            chatui.clear();
            chatroom.room = "#work";
        }
        localStorage.setItem('room', JSON.stringify(chatroom.room));
        getChats();
    }
});

btnSelectTheme.addEventListener('click', () => {
    color = `${inpThemeColor.value}80`
    theme.style.backgroundColor = color;
    localStorage.setItem('color', JSON.stringify(color));
});

ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        if (e.target.classList == "tempRemove") {
            e.target.parentElement.remove();
        }
        else {
            if (confirm("Delete message permanently?")) {
                chatroom.deleteMsg(e.target.id);
                e.target.parentElement.remove();
              }
        }
    }
});