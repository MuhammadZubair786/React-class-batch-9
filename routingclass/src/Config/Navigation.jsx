import { Route, Routes } from "react-router"
import HomePage from "../Components/HomePage"
import UserPage from "../Components/UserPage"
import UserDetails from "../Components/UserDetails"

const Navigation =()=>{
    return(
        <Routes>
            <Route path="/" element={<HomePage/>} ></Route>
            <Route path="/user" element={<UserPage/>} ></Route>
            <Route path="/user/:id" element={<UserDetails/>} ></Route>

        
        </Routes>
    )
}

export default Navigation