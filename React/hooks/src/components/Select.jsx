import { useState, useEffect } from "react";

const Select = () => {
    const [state, setState] = useState('posts');
    const [items, setItems] = useState([]);

    const handleChange = (e) => {
        setState(e.target.value);
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${state}`)
        .then((response) => response.json())
        .then((json) => setItems(json));
    },[state]);

    return (
        <div>
            <select value={state} onChange={handleChange}>
                <option value="posts">Posts</option>
                <option value="comments">Comments</option>
                <option value="albums">Albums</option>
            </select>
            <ul>
                {items.map(item => {
                    return <li key={item.id}>{item.title}</li>
                })}
            </ul>
        </div>
    )
}
export default Select;