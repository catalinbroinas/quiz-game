import { AVAILABLE_CATEGORIES } from "../../../../constants/quizConfig";

function QuizCategory({ category, onCategoryChange }) {
  const formatLabel = (value) => 
    value.charAt(0).toUpperCase() + value.slice(1);

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
        {AVAILABLE_CATEGORIES.map((value) => (
          <option key={value} value={value}>
            {formatLabel(value)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default QuizCategory;
