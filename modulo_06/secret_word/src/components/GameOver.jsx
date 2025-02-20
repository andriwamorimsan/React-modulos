import "./GameOver.css";

const GameOver = ({retry, score}) => {
    return (
        <div>
            <h1>Game Over</h1>
            <h3>A sua potuação foi: <span>{score}</span></h3>
            <button onClick={retry}>Reiniciando Jogo</button>
        </div>
    )
}
export default GameOver
