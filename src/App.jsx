import { useState } from 'react'
import './App.css'
import Watch from './Components/Watch/Watch'

function App() {
  
  // const watches = [
  //   { id: 1, name: "Apple watch", price: 400 },
  //   { id: 2, name: "Samsung watch", price: 399 },
  //   { id: 3, name: "Huawei watch", price: 200 },
  //   { id: 4, name: "Mi watch", price: 100 },
  // ];


  const watches = [
    { id: 1, name: "Apple Watch Series 8", price: 399, brand: "Apple", features: ["Heart Rate Monitor", "GPS", "Water Resistant"] },
    { id: 2, name: "Samsung Galaxy Watch 6", price: 349, brand: "Samsung", features: ["Blood Pressure Monitor", "ECG", "Sleep Tracking"] },
    { id: 3, name: "Garmin Venu 2", price: 399, brand: "Garmin", features: ["Pulse Oximeter", "GPS", "Music Storage"] },
    { id: 4, name: "Fitbit Sense 2", price: 299, brand: "Fitbit", features: ["Stress Management", "Heart Rate Monitor", "Sleep Monitoring"] },
    { id: 5, name: "Huawei Watch GT 3", price: 249, brand: "Huawei", features: ["Long Battery Life", "GPS", "SpO2 Monitoring"] }
  ];
  

  return (
    <>
      <h1>Vite + React</h1>
      {
        watches.map(watch => <Watch key={watch.id} watch={watch} />)
      }
    </>
  );
}

export default App;
