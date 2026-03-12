import { useState, useEffect } from "react";
import NumberOfQuestions from "./NumberOfQuestions";
import DifficultyLevel from "./DifficultyLevel";
import QuizCategory from "./QuizCategory";
import { DEFAULT_SETTINGS } from "../../../../config/quizConfig";
import { INITIAL_DIFFICULTIES } from "../../../../config/quizConfig";
import { INITIAL_NUM_QUESTIONS } from "../../../../config/quizConfig";
import {
  getDifficultiesByCategory,
  getFilteredQuestions
} from "../../../../utils/questions";
import questions from "../../../../data/questions";

function GameSettings({ onApply }) {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [availableDifficulties, setAvailableDifficulties] = useState(INITIAL_DIFFICULTIES);
  const [availableQuestions, setAvailableQuestions] = useState(INITIAL_NUM_QUESTIONS);
  
  useEffect(() => {
    const newDifficulties = getDifficultiesByCategory(questions, settings.category);
    const newNumQuestions = getFilteredQuestions(questions, settings).length;

    setAvailableDifficulties(newDifficulties);
    if (!newDifficulties.includes(settings.difficulty)) {
      setSettings(prev => ({
        ...prev,
        difficulty: newDifficulties[0]
      }));
    }

    setAvailableQuestions(newNumQuestions);
    if (newNumQuestions !== settings.numQuestions) {
      setSettings(prev => ({
        ...prev,
        numQuestions: DEFAULT_SETTINGS.numQuestions
      }));
    }
  }, [settings]);

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
          difficulties={availableDifficulties}
          selectedDifficulty={settings.difficulty}
          onDifficultyChange={(value) =>
            setSettings(prev => ({ ...prev, difficulty: value}))
          }
        />

        <NumberOfQuestions
          maxQuestions={availableQuestions}
          selectedNumQuestions={settings.numQuestions}
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
