import { useState } from 'react'

import './App.css'
import Car from "./components/Car.jsx";
function App() {
  const [count, setCount] = useState(0)

 const myCars = [
   {name: "fusca", km: 10000, color:"branca" },
   {name: "Polo", km: 32000, color:"cinza" },
   {name: "Onix", km: 0, color:"preto" },
 ];

  return (
    <>
      <h1>Showroom de carros</h1>
      <div className="car-container">
        {myCars.map((car) => (
           <Car car={car}/>
        ))}
      </div>
    </>
  )
}

export default App
