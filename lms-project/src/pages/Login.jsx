import { NavLink, useNavigate } from "react-router"
const Login = () => {
    const nav = useNavigate()
    const handleLogin = (role) => {
        // const user=
        localStorage.setItem("user", role)
        if (role == "admin") {
            nav("/admin")
           
        }
        else if (role == "staff") {
            nav("/staff")
        }
        else if (role == "user") {
            nav("/user")
        }
    }
    return (
        <>
            <h1>Login page</h1>
            <NavLink to={"/"}>jashfjhasjf</NavLink>
            <button onClick={()=>handleLogin("admin")}>Admin Page</button>
            <button onClick={()=>handleLogin("user")}>User Page</button>
            <button onClick={()=>handleLogin("staff")}>Staff Page</button>
        </>
    )
}
export default Login