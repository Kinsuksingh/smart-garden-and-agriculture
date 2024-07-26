import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts"
import './index.css'



const Page = (props) => {
    const {sensorDataForVisulise} = props
    return (
        <div className="page-section">
            <div className="moisture-sensor-card">
            <h1 className="heading">Soil Moisture Sensor Data Visulisation</h1>
            <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie
                    cx="50%"
                    cy="50%"
                    data={sensorDataForVisulise}
                    startAngle={0}
                    endAngle={360}
                    innerRadius="20%"
                    outerRadius="70%"
                    dataKey="value"
                >
                    <Cell name="Moisture" fill="rgb(58, 182, 244)" />
                    <Cell name="Dry" fill="#9B7653" />
                </Pie>
                <Legend
                    iconType="circle"
                    layout="horizontal"
                    verticalAlign="bottom"
                    align="center"
                />
            </PieChart>
            </ResponsiveContainer>
            </div>
        </div>
        
    )
}

export default Page
