const request = new XMLHttpRequest();

request.addEventListener("readystatechange", function() {
    if (request.readyState == 4 && request.status == 200) {
        let data = JSON.parse(request.responseText);
        console.log(data);
        console.log(data[5].title);
    }
    else if (request.readyState == 4) {
        console.log(`Desila se greska ${request.status}`);
    }
});
request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
request.send();

///////////////////////////////////////////////////////////////////////////

const usersResurs1 = new XMLHttpRequest();

usersResurs1.addEventListener("readystatechange", function() {
    if (usersResurs1.readyState == 4 && usersResurs1.status == 200) {
        let data = JSON.parse(usersResurs1.responseText);
        data.forEach(user => {
            if (user.website.endsWith(".com")) {
                console.log(user);
            }
        });
    }
    else if (usersResurs1.readyState == 4) {
        console.log(`Desila se greska ${usersResurs1.status}`);
    }
});
usersResurs1.open('GET', 'https://jsonplaceholder.typicode.com/users');
usersResurs1.send();

///////////////////////////////////////////////////////////////////////////

const usersResurs2 = new XMLHttpRequest();

usersResurs2.addEventListener("readystatechange", function() {
    if (usersResurs2.readyState == 4 && usersResurs2.status == 200) {
        let data = JSON.parse(usersResurs2.responseText);
        data.forEach(user => {
            if (user.name.includes("Clementin")) {
                console.log(user);
            }
        });
    }
    else if (usersResurs2.readyState == 4) {
        console.log(`Desila se greska ${usersResurs2.status}`);
    }
});
usersResurs2.open('GET', 'https://jsonplaceholder.typicode.com/users');
usersResurs2.send();

///////////////////////////////////////////////////////////////////////////

const usersResurs3 = new XMLHttpRequest();


usersResurs3.addEventListener("readystatechange", function() {
    if (usersResurs3.readyState == 4 && usersResurs3.status == 200) {
        let data = JSON.parse(usersResurs3.responseText);
        data.forEach(user => {
            if (user.company.name.includes("Group") || user.company.name.includes("LLC")) {
                console.log(user);
            }
        });
    }
    else if (usersResurs3.readyState == 4) {
        console.log(`Desila se greska ${usersResurs3.status}`);
    }
});
usersResurs3.open('GET', 'https://jsonplaceholder.typicode.com/users');
usersResurs3.send();

///////////////////////////////////////////////////////////////////////////

const usersResurs4 = new XMLHttpRequest();


usersResurs4.addEventListener("readystatechange", function() {
    if (usersResurs4.readyState == 4 && usersResurs4.status == 200) {
        let data = JSON.parse(usersResurs4.responseText);
        data.forEach(user => {
            console.log(user.address.city);
        });
    }
    else if (usersResurs4.readyState == 4) {
        console.log(`Desila se greska ${usersResurs3.status}`);
    }
});
usersResurs4.open('GET', 'https://jsonplaceholder.typicode.com/users');
usersResurs4.send();