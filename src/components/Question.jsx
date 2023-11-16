import {decode} from "html-entities"
import Answer from "./Answer.jsx";
import {useContext} from "react";
import context from "./context.jsx";

const Question = () => {

    const {questions, selectedAnswers, setSelectedAnswers, roundComplete, correctAnswers} = useContext(context)


    const handleClick = (questionIndex, selectedAnswer) => {
        if (!roundComplete) {
            const updatedSelectedAnswers = [...selectedAnswers]
            updatedSelectedAnswers[questionIndex] = selectedAnswer
            setSelectedAnswers(updatedSelectedAnswers)
        }

    }

    return (

        questions.map((question, index) => (
            <main key={index}>
                <h3>{decode(question.question)}</h3>
                {question.answers.map((answer, answerIndex) => (
                    <Answer
                        // useContext hier gut möglich oder sind props hier besser? wusste hier nicht ob Context Sinn macht.
                        key={answerIndex}
                        value={decode(answer)}
                        isSelected={selectedAnswers[index] === decode(answer)}
                        isCorrect={correctAnswers[index] === decode(answer)}
                        roundComplete={roundComplete}
                        handleClick={() => handleClick(index, decode(answer))}
                    />
                ))}
                <hr className="question--line"/>
            </main>
        ))

    );
}


export default Question