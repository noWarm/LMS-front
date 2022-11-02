import { useState } from "react";
import { useAuth } from "../provider/AuthProvider";

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });

    const { handleLogin } = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();
        await handleLogin(credentials);
    }
    
    const handleChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value });
    };
    
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:<input type="email" name="email" placeholder="email" required value={credentials.email} onChange={handleChange}/>
                </label>
                
                <label>
                    Password:<input type="password" name="password" placeholder="password" required value={credentials.password} onChange={handleChange}/>
                </label>

                <input type="submit" value="Login" />
            </form>
        </>
    );
};

export { Login };