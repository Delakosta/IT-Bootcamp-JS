import { useContext } from "react"
import { ThemeContext } from "../contex/themeContex"
import { Authcontext } from "../contex/authContext";



const Navbar = () => {
    const { toggleTheme } = useContext(ThemeContext);
    const { isAuth, toggleAuth} = useContext(Authcontext);

    return (
        <div>
            <button onClick={toggleTheme}>Toggle theme</button>
            <button onClick={toggleAuth}>{isAuth ? "logout" : "login"}</button>
        </div>
    )
}
export default Navbar;