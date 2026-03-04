import NumberOfQuestions from "./NumberOfQuestions";
import DifficultyLevel from "./DifficultyLevel";

function GameSettings() {
  return (
    <div className="game__settings">
      <form className="form-container">
        <NumberOfQuestions />
        <DifficultyLevel />

        <button className="btn-primary">Start Quiz</button>
      </form>
    </div>
  );
}

export default GameSettings;
