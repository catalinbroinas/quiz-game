import { QUESTION_OPTIONS } from "../../../../constants/quizOptions";

function NumberOfQuestions({ numQuestions, onNumQuestionsChange }) {
  return (
    <div className="form-select-group">
      <label
        htmlFor="number-of-questions"
        className="form-label-text"
      >Number of questions:</label>

      <select
        id="number-of-questions"
        className="form-select"
        value={numQuestions}
        onChange={(e) => onNumQuestionsChange(e.target.value)}
      >
        {QUESTION_OPTIONS.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default NumberOfQuestions;
