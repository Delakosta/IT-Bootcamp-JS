import Chatroom from "./chat.js";
import ChatUI from "./ui.js";

let ul = document.querySelector("section ul");

let chatroom1 = new Chatroom("#js", "Stefan");
console.log(chatroom1.username, chatroom1.room); // Testiram getere
chatroom1.username = "Milena"; // Testiram seter za username
console.log(chatroom1.username);
chatroom1.room = "#general"; // Testiram seter za room
console.log(chatroom1.room);
console.log(chatroom1.chats);

let chatroom2 = new Chatroom("#general", " Miki");



let chatUI1 =  new ChatUI(ul);


//chatroom2.addChat("Tralala");
chatroom2.getChats(data => {
    chatUI1.list.appendChild(chatUI1.templateLi(data));
});