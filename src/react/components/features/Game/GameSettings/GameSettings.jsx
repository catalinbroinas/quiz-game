import NumberOfQuestions from "./NumberOfQuestions";

function GameSettings() {
  return (
    <div className="game__settings">
      <form className="form-container">
        <NumberOfQuestions />

        <button className="btn-primary">Start Quiz</button>
      </form>
    </div>
  );
}

export default GameSettings;
