import { useState, useEffect } from "react";

// Components
import NumberOfQuestions from "./NumberOfQuestions";
import DifficultyLevel from "./DifficultyLevel";
import QuizCategory from "./QuizCategory";

// Config & data
import { DEFAULT_SETTINGS } from "../../../../config/quizConfig";
import { INITIAL_DIFFICULTIES } from "../../../../config/quizConfig";
import { INITIAL_NUM_QUESTIONS } from "../../../../config/quizConfig";
import questions from "../../../../data/questions";

// Helper
import {
  getDifficultiesByCategory,
  getFilteredQuestions
} from "../../../../utils/questions";

function GameSettings({ onApply }) {
  // States
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [availableDifficulties, setAvailableDifficulties] = useState(INITIAL_DIFFICULTIES);
  const [availableQuestions, setAvailableQuestions] = useState(INITIAL_NUM_QUESTIONS);
  const { category, difficulty, numQuestions } = settings;
  
  // Update select options by selected options
  useEffect(() => {
    // Get available options
    const newDifficulties = getDifficultiesByCategory(questions, category);
    const newNumQuestions = getFilteredQuestions(questions, {
      category,
      difficulty
    }).length;

    // Update difficulties by selected category
    setAvailableDifficulties(newDifficulties);
    if (!newDifficulties.includes(difficulty)) {
      setSettings(prev => ({
        ...prev,
        difficulty: newDifficulties[0]
      }));
    }

    // Update num of questions by selected category & difficulty
    setAvailableQuestions(newNumQuestions);
    if (numQuestions > newNumQuestions) {
      setSettings(prev => ({
        ...prev,
        numQuestions: newNumQuestions
      }));
    }
  }, [category, difficulty, numQuestions]);

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
