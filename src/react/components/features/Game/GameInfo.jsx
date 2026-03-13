
function GameInfo({ currentQuestion, totalQuestions, score }) {
  return (
    <ul className="game__info">
      <li className="game__info-item">
        <span className="game__info-label">Score:</span>
        <strong className="game__info-value">{score}</strong>
      </li>
      <li className="game__info-item">
        <span className="game__info-label">Question</span>
        <strong className="game__info-value">{`${currentQuestion} / ${totalQuestions}`}</strong>
      </li>
    </ul>
  );
}

export default GameInfo;
