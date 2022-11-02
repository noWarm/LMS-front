import { NavLink } from "react-router-dom"

const Navigator = () => {
    return (
        <nav>
            <NavLink to="/welcome">welcome</NavLink>
            <NavLink to="/register">register</NavLink>
            <NavLink to="/login">login</NavLink>
            <NavLink to="/logout">logout</NavLink>
        </nav>
    )
};

export { Navigator };