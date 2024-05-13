
function QuizResult(props) {
  return (
    <>
    <div className='show-score'>
    <h2>Quiz Finished!</h2>
      <p>Your score: {props.score} Out Of {props.totalScore}
        </p>
      
        
    </div>
    <button id="next-button" onClick={props.tryAgain}>Try Again</button>
    </>
  )
}

export default QuizResult