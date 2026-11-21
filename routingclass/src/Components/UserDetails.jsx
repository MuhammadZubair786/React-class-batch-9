import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router"

const UserPage = () => {
    const [data, setData] = useState([])
    const { id } = useParams()

    useEffect(() => {
        getAllUser()
    }, [])

    const getAllUser = async () => {

        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        console.log(response.data)
        var arr = []
        arr.push(response.data)
        setData(arr)
    }

    return (
        <>
            <h1>User Detail Page</h1>
           
            {
                data.map((v, i) => {
                    return (
                        <div>
                            <h1>{v.name}</h1>
                            <h1>{v.email}</h1>


                        </div>
                    )
                }
                )}


        </>
    )

}

export default UserPage