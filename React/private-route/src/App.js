import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Login from './components/Login';
import PrivateRoute from './components/PivateRoute';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="App">
    <Router>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/settings">Settings</Link>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/settings' element={
          <PrivateRoute>
            <Settings />
          </PrivateRoute>
        } />
        <Route path='/login' element={<Login onHandleLogin={handleLogin} />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>



    </div>
  );
}

export default App;
