import { use, useEffect, useState } from "react"
import { getUsers, getUsersById } from "../api/userList"
import { FcHome, FcCellPhone } from "react-icons/fc";
import { PiClockFill } from "react-icons/pi";
import Aos from "aos";



const ApiCalling = () => {
    // let [count, setCount] = useState(0)
    // let [count1, setCount1] = useState(0)

    const [email, setEmail] = useState("ali@gmail.comAli")
    const [id, setId] = useState()
    const [password, setPassword] = useState("12345")



    const [userList, setUserList] = useState([])

    useEffect(() => {

        Aos.init({
            duration: 1000,
            once: false
        })

        fetchuser()

    }, [])

    useEffect(() => {
        if (id != "") {
            // alert("get")
            fetchuserbYiD()
        }
        else {
            // alert("empty")

            fetchuser()
        }
    }, [id])

    const fetchuser = async () => {
        const data = await getUsers()
        console.log(data.users)
        setUserList(data.users)

    }

    const fetchuserbYiD = async () => {
        const data = await getUsersById(id)
        console.log(data)
        const newdata = []
        newdata.push(data)
        setUserList(newdata)

    }

    useEffect(() => {
        console.log("Run only first time")
        console.log(email, name, password)

    }, [])

    useEffect(() => {
        console.log("Run first time then when change email")
        console.log(email, name, password)

    }, [email, password])
    // useEffect(() => {
    //     console.log("run one time & Change every state")
    // },)

    // useEffect(() => {
    //     console.log("run one time & if update count")
    // }, [count])

    // useEffect(() => {
    //     console.log("run one time")
    // }, [])

    return (
        <div>
            <h1>Api call file</h1>

            <h1>Icons Add</h1>
            <FcHome size={60} style={{ backgroundColor: "pink" }} color="yellow" />
            <FcCellPhone size={60} />
            <FcHome size={60} />
            <PiClockFill size={60} color={"red"} />
            <FcHome size={60} />


            {/* <button onClick={() => setCount(++count)}>Hello{count}</button>
            <button onClick={() => setCount1(++count1)}>Hello{count1}</button> */}

            <input type="text"
                value={id}
                onChange={(e) => setId(e.target.value)} />
            <br />


            <input type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            <br />


            <input type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            <br />



            {
                userList.map((v, i) => {

                    return (
                        i % 2 == 0 ?
                            <div
                                data-aos="fade-up"
                                style={{
                                    border: "1px solid red",
                                    width: "200px",
                                    display: "inline-block", height: "200px",
                                    padding: "20px", margin: "20px"
                                }}>
                                <h1>{v.firstName}</h1>
                            </div> :
                            <div
                                data-aos="fade-down"
                                style={{
                                    border: "1px solid red",
                                    width: "200px",
                                    display: "inline-block", height: "200px",
                                    padding: "20px", margin: "20px"
                                }}>
                                <h1>{v.firstName}</h1>
                            </div>

                    )
                })
            }


        </div>
    )
}

export default ApiCalling