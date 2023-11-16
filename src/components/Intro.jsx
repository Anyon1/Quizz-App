import context from "./context.jsx";
import {useContext} from "react";

const Intro = () => {
    const {setStartGame, setSelectedAnswers, questions} = useContext(context)

    const handleClick = () => {
        setSelectedAnswers(Array(questions.length).fill(null))
        setStartGame(true)
    }

    return (
        <main className="intro">
            <h1 className="intro--title">Quizzical</h1>
            <p className="intro--text">Quiz app using the open Trivia API</p>
            <button className="button--start" onClick={handleClick}>Start quiz</button>
        </main>
    )
}


export default Intro