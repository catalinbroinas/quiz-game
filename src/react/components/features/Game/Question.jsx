
function Question() {
  return (
    <div className="game__question">
      <form className="form-container">
        <fieldset className="form-fieldset">
          <legend className="form-label-text">
            What does HTML stand for?
          </legend>

          <div className="form-check">
            <input
              type="radio"
              name="answer"
              id="answer-1"
              className="form-check-input"
            />

            <label
              htmlFor="answer-1"
              className="form-check-label"
            >Hyper Text Markup Language</label>
          </div>

          <div className="form-check">
            <input
              type="radio"
              name="answer"
              id="answer-2"
              className="form-check-input"
            />

            <label
              htmlFor="answer-2"
              className="form-check-label"
            >Home Tool Markup Language</label>
          </div>

          <div className="form-check">
            <input
              type="radio"
              name="answer"
              id="answer-3"
              className="form-check-input"
            />

            <label
              htmlFor="answer-3"
              className="form-check-label"
            >Hyperlinks and Text Markup Language</label>
          </div>

          <div className="form-check">
            <input
              type="radio"
              name="answer"
              id="answer-4"
              className="form-check-input"
            />

            <label
              htmlFor="answer-4"
              className="form-check-label"
            >Hyper Tool Multi Language</label>
          </div>
        </fieldset>

        <button className="btn-primary">Check</button>
      </form>
    </div>
  );
}

export default Question;
