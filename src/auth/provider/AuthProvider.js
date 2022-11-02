import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginAuthenticator from "../util/LoginAuthenticator";

const AuthContext = createContext(null);

const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    const navigate = useNavigate();

    const handleRegister = async () => {
    
    }

    const handleLogin = async (credentials) => {
        const token = await LoginAuthenticator(credentials);
        setToken(token);
        navigate('/dashboard')
    }
    
    const handleLogout = async () => {
        // revoke accessToken on the serverside
        const res = await fetch('http://127.0.0.1:8000/api/logout',{
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer ' + token
            })
        });
    
        const response = await res.json();
        console.log("message from server = " + response.message);
    
        // clear accesstoken from the localstorage client side
        setToken(null);
        navigate('/welcome')
    }

    const value = {
        token,
        handleRegister: handleRegister,
        handleLogin: handleLogin,
        handleLogout: handleLogout,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export { useAuth, AuthProvider }