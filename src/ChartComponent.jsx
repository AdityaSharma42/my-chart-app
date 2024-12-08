import React, {useRef, useEffect} from 'react';
import {Chart} from 'chart.js';

const ChartComponent= ({type, data, options })=>{
  const chartRef= useRef(null);

  useEffect(()=>{
    const ctx= chartRef.current.getContext('2d');
    const chart= new Chart(ctx,{
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