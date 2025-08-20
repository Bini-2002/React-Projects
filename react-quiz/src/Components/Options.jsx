export default function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button className={`btn btn-option
          ${answer === index ? "answer" : ""}
          ${hasAnswered ?
            question.correctOption === index ? 
            "correct" 
            : "wrong" 
          : ""}
          `}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "answer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
