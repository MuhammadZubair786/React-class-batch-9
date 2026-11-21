import { useEffect, useState } from "react"
import Header from "./Header"
import { NavLink } from "react-router"
const UserData = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        let arr = [
            {
                id: 1,
                name: "asad"
            },
            {
                id: 2,
                name: "ali"
            },
            {
                id: 3,
                name: "Baber"
            },
        ]

        setData(arr)
    }, [])
    return (
        <>
            <Header />
            {data.map((v, i) => {
                return (
                    <div key={i} style={{ 
                        border: "1px solid red",
                         margin: "20px" }}>
                        <NavLink to={`/user/${v.id}`}>
                            <h1>{v.id}</h1>
                            <h1>{v.name}</h1>

                        </NavLink>


                    </div>
                )
            })} 

        </>
    )
}

export default UserData