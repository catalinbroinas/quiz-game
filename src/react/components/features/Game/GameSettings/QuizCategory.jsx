import { CATEGORY_OPTIONS } from "../../../../constants/quizOptions";

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
        {CATEGORY_OPTIONS.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default QuizCategory;
