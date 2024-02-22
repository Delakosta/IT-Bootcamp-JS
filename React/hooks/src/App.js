import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { useState } from 'react';
import Select from './components/Select';
import SongList from './components/songList';
import Form from './components/newSongForm';

function App() {
  const [show, setShow] = useState(true);


  return (
    <div className="App">
      {show && <Counter />}
      <button onClick={() => (setShow(!show))}>{show ? "hide" : "show"}</button>
      {/*<Select />*/}
      <SongList />
      <Form />
    </div>
  );
}

export default App;
