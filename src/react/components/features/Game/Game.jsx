import { useState } from "react";
import GameSettings from "./GameSettings/GameSettings";
import Question from "./Question";
import {
  DEFAULT_SETTINGS,
  GAME_STATUS
} from "../../../constants/quizOptions";
import questions from "../../../data/questions";
import { getFilteredQuestions, getRandomQuestions } from "../../../utils/questions";

function Game() {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.IDLE);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  const handleApplySettings = (newSettings) => {
    setSettings(newSettings);

    const filteredQuestions = getFilteredQuestions(questions, newSettings);
    const selectedQuestions = getRandomQuestions(filteredQuestions, newSettings.numQuestions);

    setQuizQuestions(selectedQuestions);
    setCurrentQuestion(selectedQuestions[0]);

    setGameStatus(GAME_STATUS.PLAYING);
  };

  return (
    <div className="game">
      <h1 className="game__title">Quiz Game</h1>

      {gameStatus === GAME_STATUS.IDLE && (
        <GameSettings onApply={handleApplySettings} />
      )}

      {gameStatus === GAME_STATUS.PLAYING && (
        <Question
          question={currentQuestion.question}
          answers={currentQuestion.answers}
        />
      )}
    </div>
  );
}

export default Game;
