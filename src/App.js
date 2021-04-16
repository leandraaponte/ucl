import './App.css';
import React, {useState} from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";



function loadData() {
  return require('./data/202104152217.json');
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
      <XAxis />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dot={false} dataKey="Velocity" stroke="#8884d8" />
      <Line type="monotone" dot={false} dataKey="Shoulder Rotation" stroke="#82ca9d" />
      <Line type="monotone" dot={false} dataKey="Elbow Flexion" stroke="#ff0000" />
      <Line type="monotone" dot={false} dataKey="Arm Slot" stroke="#FFA500" />
    </LineChart>
    <button onClick={() => setNewData(loadData().data)}>Reload new data</button>
      </header>
    </div>
  );
}

export default App;

