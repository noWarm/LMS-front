import { createContext, useContext, useState } from "react";
import LoginAuthenticator from "../util/LoginAuthenticator";

const AuthContext = createContext(null);

const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    const handleRegister = async () => {
    
    }

    const handleLogin = async () => {
        const token = await LoginAuthenticator();
        setToken(token);
    }

    const handleLogout = () => {
        setToken(null);
    }

    const value = {
        token,
        onRegister: handleRegister,
        onLogin: handleLogin,
        onLogout: handleLogout,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export { useAuth, AuthProvider }