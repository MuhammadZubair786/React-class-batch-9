import Aos from "aos"
import { useEffect } from "react"

import "aos/dist/aos.css"; 

const AnimationDivShow = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: false
        })
    }, [])

    return (
        <div style={{display:"inline-block"}}>
            <div data-aos="fade-up"
                style={{ height: "400px", backgroundColor: "red", width: "400px",display:"inline-block" ,margin:"20px"}}>
                <h1>Hello Element</h1>

            </div>
            <div data-aos="fade-down"
                style={{ height: "400px", backgroundColor: "red", width: "400px",display:"inline-block" ,margin:"20px"}}>
                <h1>Hello Element</h1>

            </div>
            <div data-aos="zoom-out-right"
                style={{ height: "400px", backgroundColor: "red", width: "400px",display:"inline-block",margin:"20px" }}>
                <h1>Hello Element</h1>

            </div>
            <div data-aos="fade-up"
                style={{ height: "400px", backgroundColor: "red", width: "400px",display:"inline-block",margin:"20px" }}>
                <h1>Hello Element</h1>

            </div>

        </div>






    )
}
export default AnimationDivShow