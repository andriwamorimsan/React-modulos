 import './MyForm.css';

const MyForm = () => {
    return (
        <div>
        {/*    criação de form*/}
            <form>
                <label htmlFor="nome">Nome:</label>
                <input type="text" name="name" placeholder="Diite seu nome"/>
             </form>
            <input type="submit" value="Enviar"/>

        </div>
    )
}
export default MyForm
