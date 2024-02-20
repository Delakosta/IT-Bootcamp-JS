import { useState } from 'react';

const Vezba = () => {
    const [korisnik, setKorisnik] = useState({
        ime: "",
        email: "",
        godine: "",
    });

    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;

        setKorisnik((prevState) => ({ ...prevState, [name]: value}));
    }


    return <form>
            <p>Ime:</p>
            <input type="text" name='ime' onChange={handleChange}/>
            <p>Email:</p>
            <input type="text" name='email' onChange={handleChange}/>
            <p>Godine:</p>
            <input type="number" name='godine' onChange={handleChange}/>


        </form>
    }
export default Vezba;