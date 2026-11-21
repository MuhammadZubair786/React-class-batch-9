import { Route, Routes } from "react-router"
import Login from "../pages/Login"
import ProtectedRouting from "../Components/ProtectedRouting"
import AdminPage from "../pages/adminpage"
import STaffPage from "../pages/staffpage"
import UserPage from "../pages/userpage"
import UnAth from "../pages/unathorized"

const Navigation = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route element={
                <ProtectedRouting allowedRoles={["admin"]} ></ProtectedRouting>

            }>
                <Route path="/admin" element={<AdminPage />}></Route>

            </Route>
            <Route element={
                <ProtectedRouting allowedRoles={["staff"]}></ProtectedRouting>
            }
            >
                <Route path="/staff" element={<STaffPage />}></Route>
                <Route path="/staff/checkin" element={<STaffPage />}></Route>
                   <Route path="/staff/jsahdjhas" element={<STaffPage />}></Route>
                      <Route path="/staff/chsjahdjashjdeckin" element={<STaffPage />}></Route>

            </Route>
            <Route
                element={<ProtectedRouting allowedRoles={["user"]}></ProtectedRouting>}
            >
                <Route path="/user" element={<UserPage />}></Route>

            </Route>
            <Route path="*" element={<UnAth/>}></Route>
        </Routes>
    )
}

export default Navigation