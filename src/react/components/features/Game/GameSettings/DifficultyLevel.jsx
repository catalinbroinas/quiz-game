
function DifficultyLevel() {
  return (
    <div className="form-select-group">
      <label htmlFor="difficulty-level" className="form-label-text">Difficulty level:</label>

      <select id="difficulty-level" className="form-select">
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
}

export default DifficultyLevel;
