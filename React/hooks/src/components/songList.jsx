import { useState, useEffect } from "react";

const SongList = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const p1 = {
            title: "Pesma 1",
            id: 1
        };
        const p2 = {
            title: "Pesma 2",
            id: 2
        };
        const p3 = {
            title: "Pesma 3",
            id: 3
        };
        setSongs([p1, p2, p3]);

    }, []);

    function addSong(ime) {
       setSongs(prevState => [...prevState, { title, id: songs.length}])
    }

    return <div>
                <ul>
                {songs.map(song => {
                    return <li key={song.id}>{song.title}</li>
                })}
            </ul>
    </div>
}
export default SongList;