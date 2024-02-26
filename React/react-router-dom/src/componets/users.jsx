import { useEffect, useContext } from "react";

const Users = () => {

    const Users = () => {
        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => console.log(json))
        }, []);
    }

    return <h1>Users</h1>;
};

export default Users;