
function Question({
  question,
  answers,
  selectedAnswer,
  onAnswerChange,
  onSubmit
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(selectedAnswer);
  };

  return (
    <div className="game__question">
      <form className="form-container" onSubmit={handleSubmit}>
        <fieldset className="form-fieldset">
          <legend className="form-label-text">
            {question}
          </legend>

          {answers.map((answer, index) => (
            <div key={index} className="form-check">
              <input
                type="radio"
                name="answer"
                id={`answer-${index}`}
                className="form-check-input"
                value={index}
                checked={selectedAnswer === index}
                onChange={() => onAnswerChange(index)}
              />

              <label
                htmlFor={`answer-${index}`}
                className="form-check-label"
              >{answer}</label>
            </div>
          ))}
        </fieldset>

        <button type="submit" className="btn-primary">Check</button>
      </form>
    </div>
  );
}

export default Question;
