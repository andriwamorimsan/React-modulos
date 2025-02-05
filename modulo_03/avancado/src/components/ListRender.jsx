import {useState} from 'react'

const ListRender = () => {

    const [list] = useState(["matheus", "pedro", "Josias"]);

    const [users, setUsers] = useState([
        {id: 1, name: "MATHEUS", age: 31},
        {id: 2, name: "Sara", age: 32},
        {id: 3, name: "Sonia", age: 12},
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) =>{
            return prevUsers.filter((usuario) => randomNumber !== usuario.id)
        })
    }



    return (
        <>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>
                        {item}
                    </li>
                ))}
            </ul>
            <ul>
                {users.map((usuario) => (
                    <li key={usuario.id}>
                        {usuario.name} - {usuario.age}
                    </li>
                ))}
            </ul>
            <button onClick={deleteRandom}>delete random user</button>

        </>

    )
}
export default ListRender
