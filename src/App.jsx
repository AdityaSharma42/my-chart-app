import { useEffect, useState } from 'react';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import ScatterChart from './components/ScatterChart';
import BubbleChart from './components/BubbleChart';

function App(){
  const [chartData, setChartData]= useState(null)
  useEffect(()=>{
    fetch ('/data/financial_data.json')
    .then ((response)=> response.json())
    .then ((data)=> setChartData(data));
  },[]);
  

 
  }
export default App;