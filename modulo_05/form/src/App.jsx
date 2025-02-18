
import './App.css'
import MyForm from "./components/MyForm.jsx";

function App() {
  return (
    <>
      <h1 className="nomeForms">Forms</h1>
      <MyForm user={{name: "josias", email: "josias@gmail.com", bio: "sou advogado", role: "admin"}}/>
    </>
  )
}

export default App
