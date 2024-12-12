import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {

    const [user, setUser] = React.useState(null);
    const [isAuthenticated, setIsAuthenticated] = React.useState(false); // Login status

    const login = (userData) => {
        setUser(userData);
        setIsAuthenticated(true);
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
    };

    return(
        <UserContext.Provider value = {{user,setUser,isAuthenticated, login, logout}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;
