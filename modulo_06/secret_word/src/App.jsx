
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

    console.log(words)

  return (
    <div className="App">
        {gameStage === 'start' && <StartScreen/>}
        {gameStage === 'game' && <Game/>}
        {gameStage === 'end' && <GameOver/>}
      <div >

      </div>
    </div>
  )
}

export default App
