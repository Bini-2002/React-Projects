export default function Options({ question, dispatch, answer , points }) {
  const hasAnswered = answer !== null;

  const handleClick = (index) => {
    dispatch({ type: "answer", payload: index });
  };

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
          onClick={() => handleClick(index)}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
