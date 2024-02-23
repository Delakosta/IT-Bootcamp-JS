import { createContext, useState } from "react";

export const Authcontext = createContext();

const AuthcontextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(true);

    const toggleAuth = () => {
        setIsAuth(!isAuth);
    }


    return <Authcontext.Provider value={{isAuth, toggleAuth}}>{children}</Authcontext.Provider>
}
export default AuthcontextProvider;