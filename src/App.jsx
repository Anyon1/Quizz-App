import {useEffect, useState} from 'react'
import './App.css'
import Intro from "./components/Intro.jsx";
import Axios from "axios"
import Game from "./components/Game.jsx";
import Results from "./components/Results.jsx";
import {decode} from "html-entities";
import context from "./components/context.jsx"

// Fisher-Yates Shuffle
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

function App() {
    const [questions, setQuestions] = useState([])
    const [startGame, setStartGame] = useState(false)
    const [roundComplete, setRoundComplete] = useState(false)
    const [updateQuestions, setUpdateQuestions] = useState(false)
    const [selectedAnswers, setSelectedAnswers] = useState([])
    const correctAnswers = questions.map((question) => decode(question.correct_answer))

    useEffect(() => {
        setQuestions([])

        Axios.get("https://opentdb.com/api.php?amount=5&category=18&type=multiple")
            .then((response) => {
                setQuestions(response.data.results.map((question) => {
                    const {correct_answer, incorrect_answers, ...rest} = question
                    const answers = shuffleArray([correct_answer, ...incorrect_answers])
                    return {...rest, answers, correct_answer}

                }))

            })
    }, [updateQuestions])

    return (
        <context.Provider value={{
            questions,
            setQuestions,
            updateQuestions,
            setUpdateQuestions,
            roundComplete,
            setRoundComplete,
            correctAnswers,
            selectedAnswers,
            setSelectedAnswers,
            setStartGame,
            startGame
        }}>
            {
                startGame ?(
                    <main className="main--content">
                        {roundComplete
                                ? <Results/>
                                : <Game/>
                            }
                    </main>
                ) :
                    <Intro/>
            }



        </context.Provider>
    )
}

export default App



