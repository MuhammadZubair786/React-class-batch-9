import { QueryClient, useQuery } from "@tanstack/react-query";
const queryClient = new QueryClient()
const FetchUser = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    if (!response.ok) throw new Error("bhai api set url")
    return response.json();
}
const UserList = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["data"], ///unique key data store
        queryFn: FetchUser    //function api calling,       
    })
    if (isLoading) return (
        <>
            <h1>Loading.........</h1>
            <h2>Bhai wait kr </h2>
        </>

    )
    if (isError) return <h2>{error.message}</h2>
    return (
        <ul>
            {data.map((v, i) => {
                return (
                    <li key={i}>
                        <strong>Name : {v.username} == Email : {v.email}</strong>
                    </li>
                )
            })}

        </ul>
    )


}

export default UserList