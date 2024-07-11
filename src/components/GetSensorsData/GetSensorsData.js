"use client"
import FirebaseConfig from "../Firebase/FirebaseConfig"
import {ref, get, child} from "firebase/database"
import { useState } from "react" 

const db = FirebaseConfig()

const GetSensorsData = () => {
    let [soilMois, setSoilMois] = useState(0)
    let [temp, setTemp] = useState(0)
    let [humidity, setHumidity] = useState(0)
    let [rainStatus, setRainStatus] = useState('')
    let [waterPump, setWaterPumpState] = useState('true')
    let getData = () => {
        const dbref = ref(db)
        get(child(dbref, "sensors-reading1")).then(snapshot => {
            if (snapshot.exists()){
                setSoilMois(snapshot.val().SoilMoisture)
                setTemp(snapshot.val().Temperature)
                setHumidity(snapshot.val().Humidity)
                setRainStatus(snapshot.val().RainStaus)
                setWaterPumpState('ON')
            }
        })
    }
    return(
        <>
        <h1>Soil Moisture: {soilMois}</h1>
        <h1>Temperature: {temp}</h1>
        <h1>Humudity: {humidity}</h1>
        <h1>Rain Status: {rainStatus}</h1>
        <h1>WaterPump status: {waterPump}</h1>
        <button onClick={getData}>Get Data</button>
        </>
    )
}

export default GetSensorsData