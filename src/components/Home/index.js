import Cards from "../Cards"
import './index.css'


const Home = (props) => {
    const {sensorData} = props
    const {wifi, soilMois, temp, humidity, rainStatus, waterPumpState} = sensorData

    return(
        <>
            <img className="garden-img" src="https://static.vecteezy.com/system/resources/previews/002/375/822/original/smart-integrated-garden-and-farming-technology-free-vector.jpg" alt="gardenImg" />
            <ul className="card-list">
                <Cards img="https://img.freepik.com/premium-vector/antenna-tower-icon-comic-style-broadcasting-cartoon-vector-illustration-white-isolated-background-wifi-splash-effect-business-concept_157943-6974.jpg" title="Wifi Status" value={wifi}/>
                <Cards img="https://static.vecteezy.com/system/resources/previews/002/227/118/large_2x/soil-moisture-monitoring-rgb-color-icon-vector.jpg" title="Soil Moisture" value={soilMois?soilMois>=35?`Moist: ${soilMois} %`:`Dry: ${soilMois} %`:''}/>
                <Cards img="https://t4.ftcdn.net/jpg/06/10/77/53/360_F_610775392_AZQ4HZkLO7RMxeYeWfbuD8EkmjLBW0Lv.jpg" title="Temperature" value={temp}/>
                <Cards img="https://cdn4.iconfinder.com/data/icons/weather-960/64/humidity-weather-water-drop-rain-climate-percentage-1024.png" title="Humudity" value={humidity}/>
                <Cards img="https://th.bing.com/th/id/R.fcabb4ffabd7a4fcc7c78d8dc23d8702?rik=f4B6RIGnnzUPag&riu=http%3a%2f%2fclipart-library.com%2fimages%2fgieoMpAid.jpg&ehk=FexIsa%2b2r1jECfHmNKKMg7f3ImhYjYDH14g%2f7Gl8yWE%3d&risl=&pid=ImgRaw&r=0" title="Rain Status" value={rainStatus}/>
                <Cards img="https://images.template.net/82699/free-water-pump-vector-c812h.jpg" title="Water Pump Status" value={waterPumpState}/>
            </ul>
        </>
    )
}

export default Home