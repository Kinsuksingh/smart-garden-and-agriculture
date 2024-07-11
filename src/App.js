import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import GetSensorsData from './components/GetSensorsData'
import NavBar from "./components/Home";

// const App = () => <GetSensorsData/>
const App = () => {
  return(
    <>
      <NavBar/>
      <div className='main-container'>
        <GetSensorsData/>
      </div>
    </>
  )
}
export default App