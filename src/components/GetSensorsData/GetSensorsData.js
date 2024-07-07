"use client"
import FirebaseConfig from "../FirebaseConfig/FirebaseConfig"
import {ref, get, child} from "firebase/database"
import { useState } from "react" 

const db = FirebaseConfig()

const GetSensorsData = () => {
    let [soilMois, setSoilMois] = useState(0)
    let [waterPump, setWaterPumpState] = useState('')
    let getData = () => {
        const dbref = ref(db)
        get(child(dbref, "SensorsData/sensor")).then(snapshot => {
            if (snapshot.exists()){
                setSoilMois(snapshot.val().soilMois)
                setWaterPumpState(snapshot.val().waterPump)
            }
        })
    }
    return(
        <>
        <h1 htmlFor="soil">Soil Moisture : {soilMois}</h1>
        <br/>
        <h1>Water Pump State : {`${waterPump}`}</h1>
        <br/>
        <button onClick={getData}>Get Data</button>
        </>
    )
}

export default GetSensorsData