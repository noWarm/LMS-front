import { NavLink } from "react-router-dom"
import { useAuth } from "./auth/provider/AuthProvider";
import SignedInAs from "./SignedInAs";

const Navigator = () => {
    const { token, handleLogout } =  useAuth();
    return (
        <nav>
            <NavLink to="/welcome">welcome</NavLink>
            {(  !token && 
                <>
                    <NavLink to="/register">register</NavLink>
                    <NavLink to="/login">login</NavLink>
                </>
            )}
            {(
                token &&
                <>
                    <SignedInAs />
                    <button onClick={handleLogout}>logout</button>
                </>
            )}
        </nav>
    )
};

export { Navigator };