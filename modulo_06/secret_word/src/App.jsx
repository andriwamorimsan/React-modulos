
// styles
import './App.css';

// hooks
import { useCallback, useEffect, useState} from "react";

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

const guessesQty = 5;

// iniciando para jogar na main
function App() {
    const [gameStage, setGameStage] = useState(stages[0].name);
    const [words] = useState(wordsList);


    const [pickedWord, setPickedWord] = useState("");
    const [pickedCategory, setPickedCategory] = useState("");
    const [letters, setLetters] = useState([]);

    const [guessedLetters, setGuessedLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
    const [guesses, setGuesses] = useState(guessesQty);
    const [score, setScore] = useState(0);

    // função que escolhe categoria aleatoria
    const pickWordAndCategory = useCallback(() => {
        const categories = Object.keys(words);
        const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    //  função que entra dentro das categorias e escolhe uma palavra aleatoria no array
        const word = words[category][Math.floor(Math.random()) * words[category].length];
        return {word, category};
    }, [words]);

    // função para mudar stado de 0 (tela inicial) para [1] tela do jogo
    const startGame = useCallback(() => {
        // limpando todas as letras já escolhidas
        clearLetterStates();

        console.log(score===0)


        // escolhendo palabra e categoria
        const {word, category} = pickWordAndCategory();

        let wordLetters = word.split("");

        wordLetters = wordLetters.map((variavelCriada) => variavelCriada.toLowerCase() );

        // setar os status
        setPickedWord(word);
        setPickedCategory(category);
        setLetters(wordLetters);
        setGameStage(stages[1].name );
    }, [pickWordAndCategory]);

  //   processo de inserir letra
    const verifyLetter = (letter) => {
          const normalizedLetter = letter.toLowerCase();

    //       CHECANDO SE A LETRA JA FOI utilizada

        if (guessedLetters.includes(normalizedLetter) ||
            wrongLetters.includes(normalizedLetter)
        ){
            return;
        }

        // enviando letra acertada ou removendo a chance
        if (letters.includes(normalizedLetter)){
            setGuessedLetters((actualGuessedLetters) => [...actualGuessedLetters, normalizedLetter])

        } else {
            setWrongLetters((actualWrongLetters) => [...actualWrongLetters, normalizedLetter]);

            setGuesses((actualGuesses) => actualGuesses -1);
        }

    };

    const clearLetterStates = () => {
        setGuessedLetters([]);
        setWrongLetters([]);
    };



    // verificar se adivinhação terminou
    useEffect(() => {
        if (guesses <=0){
            setGameStage(stages[2].name);

            clearLetterStates();
        }

    },[guesses]);

    // verificar se ganhou
    useEffect(() => {

    const uniqueLetters = [... new Set(letters)];

    // condição para vencer
    if (guessedLetters.length === uniqueLetters.length) {
        //adicionar score
        setScore((actualScore) => actualScore += 50)

        // resetar para próxima palavra
        startGame();
    }

    }, [guessedLetters, letters, startGame]);


    // reiniciando jogo
    const retry = () => {
        setScore(0);
        setGuesses(guessesQty);
        setGameStage(stages[0].name);
    };


  return (
    <div className="App">
        {gameStage === 'start' && <StartScreen startGame={startGame}/>}
        {gameStage === 'game' && <Game
            verifyLetter={verifyLetter}
            pickedWord={pickedWord}
            pickedCategory={pickedCategory}
            letters={letters}
            guessedletters={guessedLetters}
            wrongLetters={wrongLetters}
            guesses={guesses}
            score={score}
        />}
        {gameStage === 'end' && <GameOver retry={retry} score={score}/>}
      <div >

      </div>
    </div>
  )
}

export default App
