
function GameResult({ questions, score, onReset, onPlayAgain }) {
  const percentage = Math.round((score / questions) * 100);

  return (
    <div className="game__result">
      <p className="game__result-score">
        <span className="game__result-score-label">Your score:</span>
        <strong className="game__result-score-value">{percentage}%</strong>
      </p>

      <ul className="game__result-stats">
        <li className="game__result-item">
          <span className="game__result-item-label">Total questions</span>
          <strong className="game__result-item-value">{questions}</strong>
        </li>

        <li className="game__result-item">
          <span className="game__result-item-label">Correct answers</span>
          <strong className="game__result-item-value">{score}</strong>
        </li>

        <li className="game__result-item">
          <span className="game__result-item-label">Wrong answers</span>
          <strong className="game__result-item-value">{questions - score}</strong>
        </li>
      </ul>

      <div className="game__result-cta">
        <button
          type="button"
          className="btn-primary-outline"
          onClick={onReset}
        >Reset</button>

        <button
          type="button"
          className="btn-primary"
          onClick={onPlayAgain}
        >Play Again</button>
      </div>
    </div>
  );
}

export default GameResult;
