import axiosInstance from "./axiosInstance"


export const getUsers =async ()=>{
    const response = await  axiosInstance.get("/users")
    return response.data
}

export const getUsersById =async (id)=>{
    const response = await  axiosInstance.get(`/users/${id}`)
    return response.data
}
