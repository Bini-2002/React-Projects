export default function StartScreen({ numQuestions }) {
  return (
    <div>
      <h2>Welcome to React Quiz!!</h2>
      <h3>{numQuestions} questions to test your React Mastery</h3>
      <button className='btn btn-ui'>Let's Start</button>
    </div>
  )
}
