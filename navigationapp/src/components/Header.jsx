import { NavLink } from "react-router"
import "./Header.css"
const Header = () => {
    return (
        <nav>
            <NavLink
                className={({ isActive }) => isActive == true ? "red" : "gray"}
                to={"/"}>Home Page</NavLink>

            <NavLink
                className={({ isActive }) => isActive == true ? "red" : "gray"}
                to={"/about"}>About Page</NavLink>

            <NavLink
                className={({ isActive }) => isActive ? "red" : "gray"}
                to={"/user"}>User Page</NavLink>


            <NavLink>Contact Page</NavLink>

        </nav>

    )
}

export default Header