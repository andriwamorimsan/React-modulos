import {Fragment, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import City from "./assets/melmel.jpg";
import './assets/cemporcento.css'
import ManageData from "./components/ManageData.jsx";
import ListRender from "./components/ListRender.jsx";
import ConditionalRender from "./components/ConditionalRender.jsx";
import ShowUserName from "./components/ShowUserName.jsx";
import CarDetails from "./components/CarDetails.jsx";
import Fragmentes from "./components/Fragmentes.jsx";
import Container from "./components/Container.jsx";
import ExecuteFunction from "./components/ExecuteFunction.jsx";
import Message from "./components/Message.jsx";
import message from "./components/Message.jsx";
import ChangeMessageState from "./components/ChangeMessageState.jsx";
import UserDetails from "./components/UserDetails.jsx";


function App() {
  const [count, setCount] = useState(0)

    const name = "joaquim";
  const [userName] = useState("maria");

  const cars = [
      {id: 1, brand: "Ferrari", color: "amarela", newCar: true, km: 0},
      {id: 2, brand: "KIA", color: "BRANCO", newCar: false, km: 100},
      {id: 3, brand: "Renault", color: "Azul", newCar: false, km: 500}
  ]

    function showMessage(){
      console.log("Evento do componente pai")
    }

    const [message, setMessage] = useState("");

  const handleMessage = (msg)=> {
      setMessage(msg);
  }

  const pessoas = [
      {id: 1, nome: "andre", idade: 23, profissao: "carteiro"},
      {id: 2, nome: "aline", idade: 17, profissao: "aprendiz"},
      {id: 3, nome: "sara", idade: 25, profissao: "padeiro"},
      {id: 4, nome: "pedro", idade: 15, profissao: "aprendiz"}
  ]

  return (
    <>
       <div >
           <h1>Avançado em React</h1>
       {/*   imagem em asset */}
           <img src="/mel.jpg" alt="Mel gostosa" width={600}/>

           {/*    img em asset*/}
           <br/>

           <div>
               <img src={City} className={"cem"}   alt=""/>
           </div>

           <ManageData/>

           <ListRender/>

           <ConditionalRender/>
           {/*PROPS*/}
           <ShowUserName name={userName} />
           {/*Destructiring*/}

           <CarDetails brand="WV" km={100000} color="Azul" newCar={false}/>
           {/*    reaproveitando props*/}

           <CarDetails brand="Ford" km={0} color="Vermelho" newCar={true}/>
           <CarDetails brand="Fiat" km={4000} color="Branco" newCar={false}/>

       {/*    loop de array de objetos*/}
           {cars.map((car) => (
               <CarDetails
                key={car.id}
               brand={car.brand}
               color={car.color}
               km={car.km}
               newCar={car.newCar}
               />
           ))}


           {/*   Fragment*/}
           <Fragmentes propFragment="test"/>

       {/*    children*/}
    <Container myValue="Testing">
        <p>E este é o conteúdo</p>
    </Container>
           <Container myValue="Testing 2">
        <h3>E este é o conteúdo</h3>
    </Container>

       {/*    executar função*/}
           <ExecuteFunction myFunction={showMessage}/>
       </div>

    {/*    state lift*/}
        <Message msg={message}/>
        <ChangeMessageState handleMessage={handleMessage}/>

    {/*    desafio*/}

        <UserDetails idade={18} nome="Matheus" profissao="jornalista"/>

        {pessoas.map((user) => (
            <UserDetails
                key={user.id}
                nome={user.nome}
                idade={user.idade}
                profissao={user.profissao}
            />
        ))}
    </>


  )
}

export default App
