import logo from './logo.svg';
import './App.css';
import BookContextProvider from './contex/bookContext';
import BookList from './components/bookList';
import ThemeContexProvider from './contex/themeContex';
import Navbar from './components/navbar';
import AuthcontextProvider from './contex/authContext';

function App() {
  return (
    <div className="App">
      <ThemeContexProvider>
        <AuthcontextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
        </AuthcontextProvider>
      </ThemeContexProvider>
    </div>
  );
}

export default App;
