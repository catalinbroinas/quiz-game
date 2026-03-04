
function NumberOfQuestions() {
  return (
    <div className="form-select-group">
      <label htmlFor="number-of-questions" className="form-label-text">Number of questions:</label>

      <select id="number-of-questions" className="form-select">
        <option value={1}>1</option>
        <option value={3}>3</option>
        <option value={5}>5</option>
      </select>
    </div>
  );
}

export default NumberOfQuestions;
