import React, {useRef, useEffect} from 'react';
import {Chart, registerables} from 'chart.js';

Chart.register(...registerables);

const ChartComponent= ({type, data, options })=>{ //reusable component
  const chartRef= useRef(null);

  useEffect(()=>{
    const ctx= chartRef.current.getContext('2d');
    const chart= new Chart(ctx,{ //creating a new chart instance
        type,
        data,
        options,
    });

    return () => {
        chart.destroy();
    };
  },[type, data, options]);

 
  return <canvas ref={chartRef}/>;
};

export default ChartComponent;