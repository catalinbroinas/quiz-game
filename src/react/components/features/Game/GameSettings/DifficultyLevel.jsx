import { DIFFICULTY_OPTIONS } from "../../../../constants/quizOptions";

function DifficultyLevel({ difficulty, onDifficultyChange }) {
  return (
    <div className="form-select-group">
      <label
        htmlFor="difficulty-level"
        className="form-label-text"
      >Difficulty level:</label>

      <select
        id="difficulty-level"
        className="form-select"
        value={difficulty}
        onChange={(e) => onDifficultyChange(e.target.value)}
      >
        {DIFFICULTY_OPTIONS.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DifficultyLevel;
