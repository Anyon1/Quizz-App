import Question from "./Question.jsx";
import {useContext} from "react";
import context from "./context.jsx";

const Results = () => {
    const {
        setRoundComplete,
        setUpdateQuestions,
        setSelectedAnswers,
        selectedAnswers,
        correctAnswers,
        roundComplete,
        questions
    } = useContext(context)
    const handleClick = () => {
        setRoundComplete(false)
        setUpdateQuestions((prevState) => !prevState)
        setSelectedAnswers(Array(questions.length).fill(null))
    }
    const correctAnswersCount = selectedAnswers.reduce((count, value, index) => {
        if (correctAnswers[index] === value) {
            return count + 1;
        }
        return count;
    }, 0);

    return (
        <>
            <Question/>
            {roundComplete && <span>You answered {correctAnswersCount} out of {questions.length} correctly. </span>}
            <button className="button--check" onClick={handleClick}>Play again</button>
        </>

    )

}

export default Results