import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    const navigate = useNavigate();

    const handleRegister = async (credentials) => {
        try {

            const response = await fetch('http://127.0.0.1:8000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                 },
                body: JSON.stringify(credentials),
            });
            
            const responseData = await response.json();
            console.log(responseData);
            handleLogin(credentials);

        } catch (e) {
            console.error(e);
        }
    };

    const handleLogin = async (credentials) => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST',
                    'Access-Control-Allow-Headers': 'Content-Type',
                 },
                body: JSON.stringify(credentials),
            });
            
            const responseData = await response.json();
            setToken(responseData.accessToken);
            

            
            navigate('/dashboard')


        
        } catch (e) {
            console.error(e);
        }
    };
    
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
    };

    const value = {
        token,
        handleRegister: handleRegister,
        handleLogin: handleLogin,
        handleLogout: handleLogout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
};

export { useAuth, AuthProvider };