import { createContext, useReducer } from "react";
import { userReducer } from "../reducer/userReducer";
import { Users } from "../componets";

export const UserContext = createContext();

const UsersContextProvider = ({ children }) => {


    return UsersContextProvider = ({ children }) => {
        return <UserContext.Provider value={{users, dispatch}}>
                {children}
            </UserContext.Provider>
    };
};
export default Users;
