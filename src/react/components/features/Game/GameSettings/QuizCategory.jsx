
function QuizCategory({ category, onCategoryChange }) {
  return (
    <div className="form-select-group">
      <label
        htmlFor="quiz-category"
        className="form-label-text"
      >Category:</label>

      <select
        id="quiz-category"
        className="form-select"
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="technology">Technology</option>
        <option value="geography">Geography</option>
        <option value="sport">Sport</option>
      </select>
    </div>
  );
}

export default QuizCategory;
