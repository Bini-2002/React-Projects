import Options from "./Options";

export default function Question({ question, dispatch, answer , points }) {
    return (
    <div>
      <h4>{question.question}</h4>
      <Options 
        question={question} 
        answer={answer} 
        dispatch={dispatch} 
        points={points}
      />
    </div>
  )
}
