import { NavLink, useParams } from "react-router"

const NotFound =()=>{
    const data = useParams()
    console.log(data)
    return(
        <>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe-f2If6ij5Eercn7vhUZXDHzMQLsoeiMsRWet0cYukg&s" />
        <h1>Use NavLinks for Navigation</h1>
        <NavLink to={"/"}>Back to home</NavLink>
        </>
    )
}
export default NotFound