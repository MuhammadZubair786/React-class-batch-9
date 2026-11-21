import { Route, Routes } from "react-router"
import HomePage from "../components/Home"
import AboutPage from "../components/About"
import NotFound from "../components/NotFound"
import UserData from "../components/User"
import { UserDetails } from "../components/userDetails"

const Navigation = () => {
    return (
        <Routes>
            <Route path="/" 
            element={<HomePage />}></Route>

            <Route path="/about" 
            element={<AboutPage/>}></Route>

            <Route
             path="/user"
            element={<UserData/>}
            ></Route>

            <Route path="/user/:id"
             element={<UserDetails/>}></Route>

            <Route
            path="*"
            element={<NotFound/>}
            ></Route>
        </Routes>
    )
}

export default Navigation