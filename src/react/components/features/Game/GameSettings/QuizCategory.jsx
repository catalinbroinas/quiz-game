
function QuizCategory() {
  return (
    <div className="form-select-group">
      <label htmlFor="quiz-category" className="form-label-text">Category:</label>

      <select id="quiz-category" className="form-select">
        <option value="technology">Technology</option>
        <option value="geography">Geography</option>
        <option value="sport">Sport</option>
      </select>
    </div>
  );
}

export default QuizCategory;
