
function GameResult({ score, onReset }) {
  return (
    <div className="game__result">
      <p className="game__result-score">
        Your score: {score}
      </p>

      <button
        type="button"
        className="btn-primary"
        onClick={onReset}
      >Reset</button>
    </div>
  );
}

export default GameResult;
