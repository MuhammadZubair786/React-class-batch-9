import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink } from "react-router"

const UserPage = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        getAllUser()
    }, [])

    const getAllUser = async () => {

        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(response.data)
        setData(response.data)
    }

    return (
        <>
            <h1>User Page</h1>
            {
                data.map((v, i) => {
                    return (
                        <div>
                            <NavLink to={`/user/${v.id}`}>
                                <h1>{v.id}{v.name}</h1>
                            </NavLink>

                        </div>
                    )
                })
            }
        </>
    )

}

export default UserPage