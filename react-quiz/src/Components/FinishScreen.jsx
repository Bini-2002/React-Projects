export default function FinishScreen({dispatch , points, maxPossiblePoints,highscore }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji

  if (percentage === 1000) emoji = "🥇"
  if (percentage >= 80 && percentage < 100) emoji = "🎉"
  if (percentage >= 50 && percentage < 80) emoji = "😊"
  if (percentage >= 0 && percentage < 50) emoji = "😢"
  if (percentage === 0) emoji = "🤦🏻‍♂️"

  return (
    <>
      <div className='result'>
        <span>
          {emoji}
        </span>
        you scored <strong>{points}</strong> out of <strong>{maxPossiblePoints}</strong>
        ({Math.ceil(percentage)}%)
      </div>
      <p className="higscore">
        (Highscore : {highscore} points)
      </p>

      <button 
      className="btn btn-ui"
      onClick={()=> dispatch({type : "restart"})}>
        Restart The Quiz
      </button>
    </>
  )
}
