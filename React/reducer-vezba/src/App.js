import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import korisnikReducer from "./korisnikReducer"

const defaultUsers = [
  {
    name: "user1",
    id: 0,
  },
];




function App() {
  return (
    const [users, dispatchUser] = userReducer(korisnikReducer, default);
    const [inputState, setInputState] = useState("")
    return (
      <div className="App">
        <div>
          {users.map((user) => )}
        </div>
      </div>
    )


  );
}

export default App;
