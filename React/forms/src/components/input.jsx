import { useState } from 'react';

const Input = () => {

    const [person, setPerson] = useState({
        name: "",
        age: "",
        errorMsg: ""
    });

    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        console.log(name, value);
        setPerson((prevState) => ({ ...prevState, [name]: value, errorMsg})); // isto kao errorMsg: errorMsg

        let errorMsg = "";
        if (name === 'age') {
            if (value !== '' && !Number(value)){
                errorMsg = "You must enter number!"
            }
        }
    }

    return <form>
        <h1>Hello {person.name}</h1>
        <h2>Your age is: {person.age}</h2>
        <h5>{person.errorMsg}</h5>

        <p>Enter your name:</p>
        <input type="text" name='name' onChange={handleChange}/>
        <p>Enter your age:</p>
        <input type="text" name='age' onChange={handleChange}/>
    </form>
}
export default Input;