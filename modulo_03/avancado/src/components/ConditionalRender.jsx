import {useState} from "react";


const ConditionalRender = () => {

    const [x] = useState(false);

    const [name, setName] = useState("Matheus");

    return (
        <div>
            <h2> if ternário</h2>
            <h1>Isso será exibido?
                {x && <p>se x for true, sim!</p>}
                {!x && <p>se x for false, sim!</p>}
                {name === "joão" ? (
                    <p>O nome é João</p>
                ) : (
                    <p>O nome não é João</p>
                )}
            </h1>
            <button onClick={() => setName("joão")}>mudar pra joao</button>

        </div>
    )
}

export default ConditionalRender
