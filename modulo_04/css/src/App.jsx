import './App.css';

import {useState} from "react";
import MyComponent from "./components/MyComponent.jsx";
import Title from "./components/Title.jsx";



function App() {

    const n =  15;
    const [name] = useState("Matheus");
    const redTitle = false;

  return (
    <>
        {/*css global*/}
        <h1>React com  CSS</h1>
        {/*css de componente*/}

        <MyComponent/>

        <p>esse é dentro do app jsx</p>

    {/*inline css*/}
        <p style={{color:"blue", padding: "25px", borderTop: "2px solid red"}}>
            Este elemento foi estilizado de forma inline
        </p>
    {/*    css inline dinâmico */}

        <h2 style={n< 10 ? ({color: "purple"}) : ({color:"pink"})}> Css Dinâmico</h2>
        <h2 style={n> 10 ? ({color: "purple"}) : ({color:"pink"})}> Css Dinâmico</h2>

        <h2 style={name === "Matheus" ? ({color: "green", backgroundColor: "#fff"}) : null}> Nome null</h2>

    {/*    casse dinâmica*/}
        <h2 className={redTitle ? "red-title" : "title"}>
            Esse título vai ter classe dinâmica</h2>

        {/*    CSS Modules*/}


        <Title/>
        <h2 className="my_title"> testando</h2>
    </>

  )
}

export default App
