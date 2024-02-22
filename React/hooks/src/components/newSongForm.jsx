import { useState } from "react";


const Form = () => {
    const [title, setTitle] = useState("");





    return <div>
        <h3>Song title:</h3>
        <input type="text" value={title} placeholder="Unesite ime pesme" />
        <button type="submit">Submit</button>
    </div>
}
export default Form;