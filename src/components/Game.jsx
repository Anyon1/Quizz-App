import React from "react";
import Question from "./Question.jsx";
import {useContext} from "react";
import context from "./context.jsx";

const Game = () => {
    const {selectedAnswers, setRoundComplete} = useContext(context)
    const handleClick = () => {
        if (!selectedAnswers.includes(null)) {
            setRoundComplete(true)
        }
    }
    return (
        <>
            <Question/>
            <button className="button--check" onClick={handleClick}>Check results</button>
        </>
    )
}


export default Game