import { useState } from 'react'
import './App.css'
import Truffas from "./components/truffas.jsx";

function App() {
  const [count, setCount] = useState(0)
    const myDoces =  [
      {nome: "trufa", tipo: "chocolate", sabor: "morango" },
      {nome: "trufa", tipo: "chocolate branco", sabor: "amedoim" },
      {nome: "trufa", tipo: "chocolate amargo", sabor: "doce de leite" },
      {nome: "trufa", tipo: "chocolate", sabor: "castanha" },
      {nome: "trufa", tipo: "chocolate branco", sabor: "maracuja" },
      {nome: "trufa", tipo: "chocolate amargo", sabor: "oreon" },
    ];

  return (
    <>
    <h1>Doces da Julia</h1>
      <div>
        { myDoces.map((docinhos)=> (
            <Truffas doces={docinhos}/>
        ))}
      </div>
    </>
  )
}

export default App
