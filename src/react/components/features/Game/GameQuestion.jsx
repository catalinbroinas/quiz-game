
function GameQuestion({
  question,
  answers,
  correctAnswer,
  selectedAnswer,
  showResult,
  isLastQuestion,
  onAnswerChange,
  onSubmit
}) {
    const getAnswerContent = (answer, index) => {
    if (!showResult) return answer;

    if (selectedAnswer === correctAnswer) {
      if (selectedAnswer === index) {
        return <span className="game__question-answer--correct">{answer}</span>;
      }
      return answer;
    }

    if (selectedAnswer === index) {
      return <span className="game__question-answer--wrong">{answer}</span>;
    }

    if (correctAnswer === index) {
      return <span className="game__question-answer--correct-reveal">{answer}</span>;
    }

    return answer;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(selectedAnswer);
  };

  return (
    <div className="game__question">
      <form className="form-container" onSubmit={handleSubmit}>
        <fieldset className="form-fieldset">
          <legend className="text fw-bold mb-3">
            {question}
          </legend>

          {answers.map((answer, index) => (
            <div key={index} className="form-check">
              <input
                type="radio"
                name="answer"
                id={`answer-${index}`}
                className="form-check-input game__question-radio"
                value={index}
                checked={selectedAnswer === index}
                disabled={showResult}
                onChange={() => onAnswerChange(index)}
              />

              <label
                htmlFor={`answer-${index}`}
                className="game__question-answer"
              >
                {getAnswerContent(answer, index)}
              </label>
            </div>
          ))}
        </fieldset>

        <button
          type="submit"
          className="btn-primary"
          disabled={selectedAnswer === null}
        >
          {!showResult ? 'Check' : (
            isLastQuestion ? 'Finish' : 'Next'
          )}
        </button>
      </form>
    </div>
  );
}

export default GameQuestion;
