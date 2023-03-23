import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BatteryDown from './components/BettaryDown/BatteryDown'
import ToDo from './components/TODO/ToDo'

function App() {
  
  return (
    <div className="App">
      <BatteryDown></BatteryDown>
      <ToDo></ToDo>
    </div>
  )
}

export default App
