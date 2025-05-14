
import './App.css'

// config react route
import {BrowserRouter, Routes, Route, Router} from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Product from "./pages/Product.jsx";
import Info from "./pages/Info.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {

  return (
    <>
       <h1>React Router</h1>
        <BrowserRouter>
            {/*links com react route*/}

            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
            {/*   4- rota dinamica*/}

                <Route path="/products/:id" element={<Product/>} />
            {/*    6- nested router*/}
                <Route path="/products/:id/info" element={<Info/>} />
            {/*    7 -  no match route*/}
                <Route path="*" element={<NotFound/>} />

            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
