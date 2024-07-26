"use client"
import FirebaseConfig from "../src/components/Firebase/FirebaseConfig"
import {ref, get, child} from "firebase/database"
import { useEffect, useState } from "react" 
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Home from './components/Home'
import NavBar from "./components/NavBar";
import Page from "./components/Page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const db = FirebaseConfig()

const App = () => {
    let [wifi, setWifi] = useState('')
    let [soilMois, setSoilMois] = useState('')
    let [temp, setTemp] = useState('')
    let [humidity, setHumidity] = useState('')
    let [rainStatus, setRainStatus] = useState('')
    let [waterPumpState, setPumpState] = useState('')

    useEffect(() => {
        setInterval(() => {
            getData();
        }, 1000); // Interval: Fetch data every second
    }, []);

    let getData = () => {
        const dbref = ref(db)
        get(child(dbref, "sensors-reading1")).then(snapshot => {
            if (snapshot.exists()){
                setWifi(snapshot.val().WiFi)
                setSoilMois(snapshot.val().SoilMoisture)
                setTemp(snapshot.val().Temperature)
                setHumidity(snapshot.val().Humidity)
                setRainStatus(snapshot.val().RainStaus)
                setPumpState(snapshot.val().MotorState)
            }
        })
    }
  const sensorData = {
    wifi,
    soilMois,
    temp,
    humidity,
    rainStatus,
    waterPumpState
  }

  const data = [
    {
      value: soilMois?soilMois:0,
      soilMoisStatus: "Moisture",
    },
    {
      value: soilMois?100-soilMois:0,
      soilMoisStatus: "Dry",
    },
  ]
  return(
    <BrowserRouter>
      <NavBar/>
      <div className="main-container">
          <Routes>
              <Route path="/smart-garden-and-agriculture" element={<Home sensorData={sensorData}/>} />
              <Route path="/smart-garden-and-agriculture/data" element={<Page sensorDataForVisulise={data}/>} />
          </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App