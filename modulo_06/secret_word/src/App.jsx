
// styles
import './App.css';

// hooks
import {use, useCallback, useEffect, useState} from "react";

// importação dos dados
import {wordsList} from "./data/words.jsx";

// components
import StartScreen from "./components/StartScreen.jsx";
import Game from "./components/Game.jsx";
import GameOver from "./components/GameOver.jsx";

const stages = [
    {id: 1, name: "start"},
    {id: 2, name: "game"},
    {id: 3, name: "end"},
];

// iniciando para jogar na main
function App() {
    const [gameStage, setGameStage] = useState(stages[0].name);
    const [words] = useState(wordsList);

    // função para mudar stado de 0 (tela inicial) para [1] tela do jogo
    const startGame = () =>{
        setGameStage(stages[1].name);
    };

  //   processo de inserir letra
    const verifyLetter = () => {
        setGameStage(stages[3].name);
    };

  return (
    <div className="App">
        {gameStage === 'start' && <StartScreen startGame={startGame}/>}
        {gameStage === 'game' && <Game  verifyLetter={verifyLetter} />}
        {gameStage === 'end' && <GameOver/>}
      <div >

      </div>
    </div>
  )
}

export default App
