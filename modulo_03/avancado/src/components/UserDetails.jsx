

const UserDetails = ({nome, idade, profissao}) => {
    return (
        <>
            <ul>
                <li>Nome:{nome}</li>
                <li>Idade:{idade}</li>
                <li>Profissão: {profissao}</li>
            </ul>
            {idade >= 18 ? ("apto a ser motorista") : ("não pode tirar carteira")}
        </>
    )
}
export default UserDetails
