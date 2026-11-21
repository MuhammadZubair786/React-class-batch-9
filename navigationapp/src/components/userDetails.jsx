import { useParams } from "react-router"

export const UserDetails=()=>{
    const {id} = useParams()
    console.log(id)
    return(
        <div>
            <h1>Select user Id : {id}</h1>
        </div>
    )
}