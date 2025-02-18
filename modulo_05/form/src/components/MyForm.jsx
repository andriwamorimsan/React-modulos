 import './MyForm.css';
import {useState} from "react";

 const MyForm = ({user}) => {

    const [name, setName] = useState(user ? user.name: "");
    const [email, setEmail] = useState(user ? user.email: "");

    const [bio,setBio] = useState(user ? user.bio: "");

    const [role, setRole] = useState(user ? user.role: "");

    const handleName = (e) => (
      setName(e.target.value)
    );
    // console.log(name)
    // console.log(email)

     const handleSubmit = (event) =>{
        event.preventDefault();
        console.log("Enviando o form")
        console.log(name, email, bio, role);

        // VALIDACAO
        //  ENVIO

        // LIMPANDO FORMS
        setName("");
        setEmail("");
        setBio("");
        setRole("");
     }

    return (
        <div>
        {/*    criação de form*/}
            <form onSubmit={handleSubmit}>
                <label htmlFor="nome">Nome:</label>
                <input type="text" name="name" placeholder="Diite seu nome" onChange={handleName} value={name}/>

                {/*label envolvendo input*/}
                <span>Email:</span>
                {/*simplificar states*/}
                <input type="email" name="email" placeholder="Digite o seu e-mail" onChange={(e) =>  setEmail(e.target.value)} value={email}/>

                <label>
                    <span>Bio:</span>
                    <textarea name="bio" placeholder="Descrição do usuário" onChange={(e) => setBio(e.target.value) } value={bio}></textarea>
                </label>

                <label>
                    <span>Função do sistema:</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
 b                      <option  value="user"> Usuário</option>
                        <option  value="editor"> Editor</option>
                        <option  value="admin"> Administrador</option>
                    </select>
                </label>

                <input type="submit" value="Enviar"/>
            </form>

        </div>
    )
}
export default MyForm
