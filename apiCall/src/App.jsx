import { React } from 'react'
import ApiCalling from './Components/apiCalling'
import AnimationDivShow from './Components/newAos'
import "aos/dist/aos.css";
import PaginationApiCalling from './Components/postApi';
const App = () => {
  return (
    <div>
    <h1>Api Calling</h1>
    {/* <ApiCalling/>
    <AnimationDivShow/> */}
    <PaginationApiCalling/>
    </div>
  )
}

export default App