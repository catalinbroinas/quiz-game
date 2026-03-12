
function DifficultyLevel({ difficulties, selectedDifficulty, onDifficultyChange }) {
  const formatLabel = (value) =>
    value.charAt(0).toUpperCase() + value.slice(1);

  return (
    <div className="form-select-group">
      <label
        htmlFor="difficulty-level"
        className="form-label-text"
      >Difficulty level:</label>

      <select
        id="difficulty-level"
        className="form-select"
        value={selectedDifficulty}
        onChange={(e) => onDifficultyChange(e.target.value)}
      >
        {difficulties.map((value) => (
          <option key={value} value={value}>
            {formatLabel(value)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DifficultyLevel;
