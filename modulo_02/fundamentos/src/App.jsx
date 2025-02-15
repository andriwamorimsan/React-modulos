import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FistComponent from "./components/FistComponent.jsx";

import './App.css'
import TemplateExpression from "./components/TemplateExpression.jsx";
import Events from "./components/Events.jsx";
import Challenge from "./components/Challenge.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
            <FistComponent />
        <TemplateExpression/>
        <Events/>


        <Challenge/>
    </>
  )
}

export default App
