import App from "../App"


 const UserDetail=()=>{
    return(
        <div>
        <h1>User name : Smit</h1>
        <h2>User email : abc@gmail.com</h2>
        </div>
    )
}

 export const Footer=()=>{
    return(
        <div>
            <App/>
            <h1>Copyright @2026</h1>
            <UserDetail/>
        </div>
    )
}

// // export default UserDetail
// export {UserDetail,Footer}