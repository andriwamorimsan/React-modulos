import {useState, useEffect} from "react";

import './App.css'


const url = "http://localhost:3000/products";

// função app
function App() {
  // variaveis
    const [products, setProducts] = useState([])

  //   aula 1 resgatando dados
    useEffect(() => {

        async function fatchData(){

            const res = await fetch(url);

            const data = await res.json();

            setProducts(data);
        }

        fatchData();

    }, []);



  // view
  return (
    <>
      <div className="App">
          <h1>Lista de produtos</h1>
          <ul>
              {products.map((produto) => (
                  <li key={produto.id}>
                      {produto.name} - R$: {produto.price}
                  </li>
              ))}

          </ul>
      </div>
    </>
  )
}

export default App
