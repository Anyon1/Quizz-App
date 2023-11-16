const Answer = ({value, isSelected, handleClick, isCorrect, roundComplete}) => {
    return (
        <button
            className={isSelected
                ? "question--button--checked"
                : (roundComplete && isCorrect)
                    ? "question--button--correct"
                    : "question--button"
            }
            onClick={handleClick}
        >
            {value}
        </button>
    );
};

export default Answer