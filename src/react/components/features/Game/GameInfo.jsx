
function GameInfo({ currentQuestion, totalQuestions, score }) {
  return (
    <ul className="game__info">
      <li className="game__info-item">
        Score: {score} 
      </li>
      <li className="game__info-item">
        Question {`${currentQuestion} / ${totalQuestions}`}
      </li>
    </ul>
  );
}

export default GameInfo;
