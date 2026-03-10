import { useState } from "react";
import NumberOfQuestions from "./NumberOfQuestions";
import DifficultyLevel from "./DifficultyLevel";
import QuizCategory from "./QuizCategory";
import { DEFAULT_SETTINGS } from "../../../../constants/quizOptions";

function GameSettings({ onApply }) {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);

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
        <QuizCategory
          category={settings.category}
          onCategoryChange={(value) =>
            setSettings(prev => ({ ...prev, category: value}))
          }
        />

        <DifficultyLevel
          difficulty={settings.difficulty}
          onDifficultyChange={(value) =>
            setSettings(prev => ({ ...prev, difficulty: value}))
          }
        />

        <NumberOfQuestions
          numQuestions={settings.numQuestions}
          onNumQuestionsChange={(value) =>
            setSettings(prev => ({ ...prev, numQuestions: value}))
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
