import { Outlet, useLocation } from "react-router"
import Login from "../pages/Login"
import UnAth from "../pages/unathorized"

const ProtectedRouting =({allowedRoles})=>{
    const location = useLocation()
    const user = localStorage.getItem("user")
    if(!user){
        return <Login/>
    }
    if(!allowedRole.includes(user)){
        return <UnAth/>
    }
    return <Outlet/>
}
export default ProtectedRouting