import {useState, useEffect} from "react";

import './App.css'

//adicionando hook para exportar pra app
import {useFetch} from "./hooks/useFetch.jsx";

const url = "http://localhost:3000/products";

// função app
function App() {
  // variaveis
    const [products, setProducts] = useState([]);
    // utilizando hook para retornar os produtos
    const {data: items, httpConfig, loading} = useFetch(url)




    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

  //   aula 1 resgatando dados
  //   useEffect(() => {
  //
  //       async function fatchData(){
  //
  //           const res = await fetch(url);
  //
  //           const data = await res.json();
  //
  //           setProducts(data);
  //       }
  //
  //       fatchData();
  //
  //   }, []);

  //   2- adicionar produtos
const handleSubmit = async (e) =>{
    e.preventDefault()

    const product = {
        name,
        price
    };

//     const res = await fetch(url,{
//         method: "POST",
//         headers:{
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(product),
//     });
//
// //     3 - carregamento dinâmico
//     const addedProduct = await res.json();
//
//     setProducts((previewProducts) => [...previewProducts, addedProduct ]);


    // 5 refatorando post
    httpConfig(product, "POST")

    setName("");
    setPrice("");
}


  // view
  return (
    <>
      <div className="App">
          <h1>Lista de produtos</h1>
          {/*6 - loading*/}
          {loading && <p>Carregando dados...</p>}
          {!loading &&(
              <ul>
                  {items && items.map((produto) => (
                      <li key={produto.id}>
                          {produto.name} - R$: {produto.price}
                      </li>
                  ))}

              </ul>
          )}
          <div className="add-product">
              <form onSubmit={handleSubmit}>
                  <label>
                      Nome:
                      <input type="text" value={name} name="name" onChange={(nome_do_valor) => setName(nome_do_valor.target.value)}/>
                  </label>
                  <label>
                      Preço:
                      <input type="number" value={price} name="price" onChange={(nome_do_valor) => setPrice(nome_do_valor.target.value)}/>
                  </label>
                  <input type="submit" value="Criar"/>
              </form>
          </div>

      </div>
    </>
  )
}

export default App
