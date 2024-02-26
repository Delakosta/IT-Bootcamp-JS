import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Home, Users, About } from "./componets";
import { UserContextProvider } from './context/userContext';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Router>
          <div className='navbar'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/users">Users</Link>
          </div>
          <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/users' element={<Users />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;