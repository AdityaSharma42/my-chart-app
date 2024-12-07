import { useEffect, useState } from 'react';
import BarChart from './BarChart';
import LineChart from './LineChart';
import ScatterChart from './ScatterChart';
import BubbleChart from './BubbleChart';


function App(){
  const [chartData, setChartData]= useState(null)
  useEffect(()=>{
    fetch ('/financial_data.json')
    .then ((response)=> response.json())
    .then ((data)=> setChartData(data));
  },[]);
  
  return (
    <div>
      <h1>Dynamic Chart Dashboard</h1>
      <BarChart data={chartData}/>
      <LineChart data={chartData}/>
      <ScatterChart data={chartData}/>
      <BubbleChart data={chartData}/>
    </div>
  );
 
  }
export default App;