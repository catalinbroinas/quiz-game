
function NumberOfQuestions({ maxQuestions, selectedNumQuestions,  onNumQuestionsChange }) {
  return (
    <div className="form-select-group">
      <label
        htmlFor="number-of-questions"
        className="form-label-text"
      >Number of questions:</label>

      <select
        id="number-of-questions"
        className="form-select"
        value={selectedNumQuestions}
        onChange={(e) => onNumQuestionsChange(e.target.value)}
      >
        {[...Array(maxQuestions).keys()].map((_, i) => 
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        )}
      </select>
    </div>
  );
}

export default NumberOfQuestions;
