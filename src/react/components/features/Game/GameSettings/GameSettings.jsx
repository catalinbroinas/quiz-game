import NumberOfQuestions from "./NumberOfQuestions";
import DifficultyLevel from "./DifficultyLevel";
import QuizCategory from "./QuizCategory";

function GameSettings() {
  return (
    <div className="game__settings">
      <form className="form-container">
        <NumberOfQuestions />
        <DifficultyLevel />
        <QuizCategory />

        <button className="btn-primary">Start Quiz</button>
      </form>
    </div>
  );
}

export default GameSettings;
