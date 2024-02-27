import { useState } from "react";

const Login = () => {

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.precentDefault();
    };


    return <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>username</label>
        <input type="text" value={password}
        onChange={(e) => setPassword(e.target.value)}/>
        <input type="submit" />
    </form>
}
export default Login;