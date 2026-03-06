import { useState } from "react";
import NumberOfQuestions from "./NumberOfQuestions";
import DifficultyLevel from "./DifficultyLevel";
import QuizCategory from "./QuizCategory";

function GameSettings({ onApply }) {
  const [settings, setSettings] = useState({
    numQuestions: 0,
    difficulty: '',
    category: ''
  });

  const normalizeSettings = (settings) => ({
    ...settings,
    numQuestions: Number(settings.numQuestions)
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onApply(normalizeSettings(settings));
  };

  return (
    <div className="game__settings">
      <form className="form-container" onSubmit={handleSubmit}>
        <NumberOfQuestions
          numQuestions={settings.numQuestions}
          onNumQuestionsChange={(value) =>
            setSettings(prev => ({ ...prev, numQuestions: value}))
          }
        />

        <DifficultyLevel
          difficulty={settings.difficulty}
          onDifficultyChange={(value) =>
            setSettings(prev => ({ ...prev, difficulty: value}))
          }
        />

        <QuizCategory
          category={settings.category}
          onCategoryChange={(value) =>
            setSettings(prev => ({ ...prev, category: value}))
          }
        />

        <button type="submit" className="btn-primary">
          Start Quiz
        </button>
      </form>
    </div>
  );
}

export default GameSettings;
