import './App.css';
import React, {useState} from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar
} from "recharts";

const data01 = [
  {
    name: "Week 1",
    Week: 1.23
  },
  {
    name: "Week 2",
    Week: 1.52
  },
  {
    name: "Week 3",
    Week: 0.82
  },
  {
    name: "Week 4",
    Week: 0.47
  }
];
function loadData() {
  return require('./data/mock2.0.json');
}
function App() {
  const [data, setNewData] = useState(loadData().data);
 
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Pitch
        </p>
        <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      {/* <XAxis dataKey="name" tick={{fontSize: 20}}/> */}
      <XAxis dataKey="Time" tick={{fontSize: 11,  stroke: 'white'}} label={{ value: "Time (sec)", fontSize: 17, position: "insideBottom", dy: 9, stroke: 'white' }}/>
      <YAxis tick={{fontSize: 18, stroke: 'white'}}label={{ value: "Velocity (miles/hr)", fontSize: 17, position: "leftup", angle:-90, dx:-12, stroke: 'white' }}/>
      <Tooltip />
      <Legend />
      <Line type="monotone" dot={false} dataKey="Velocity" stroke="#8884d8" />
    </LineChart>
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      {/* <XAxis dataKey="name" tick={{fontSize: 20}}/> */}
      <XAxis dataKey="Time" tick={{fontSize: 11,  stroke: 'white'}} label={{ value: "Time (sec)", fontSize: 17, position: "insideBottom", dy: 9, stroke: 'white' }}/>
      <YAxis tick={{fontSize: 18, stroke: 'white'}} label={{ value: "Angle (deg)", fontSize: 17, position: "leftup", angle:-90, dx:-12, stroke: 'white' }}/>
      <Tooltip />
      <Legend />
      <Line type="monotone" dot={false} dataKey="Shoulder Rotation" stroke="#82ca9d" />
      <Line type="monotone" dot={false} dataKey="Elbow Flexion" stroke="#ff0000" />
      <Line type="monotone" dot={false} dataKey="Arm Slot" stroke="#FFA500" />
    </LineChart>
    <BarChart
      width={500}
      height={400}
      data={data01}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
      
    >
      <XAxis dataKey="name" scale="band" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="Week" barSize={30} fill="#413ea0" />
      <Line type="monotone" dot={false} dataKey="Week" stroke="#ff7300" />
      
    </BarChart>
    
    
    <button onClick={() => setNewData(loadData().data)}>Reload new data</button>
      </header>
    </div>
  );
}


export default App;

