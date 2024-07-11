import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import GetSensorsData from './components/GetSensorsData/GetSensorsData'
import NavBar from "./components/Home";

// const App = () => <GetSensorsData/>
const App = () => {
  return(

    <div className='main-container'>
      <NavBar/>
      <GetSensorsData/>
    </div>
  )
}
export default App