import { useState, useEffect } from "react";

import GameSettings from "./GameSettings/GameSettings";
import Question from "./Question";
import GameInfo from "./GameInfo";

import {
  DEFAULT_SETTINGS,
  GAME_STATUS
} from "../../../constants/quizOptions";
import questions from "../../../data/questions";

import { getFilteredQuestions } from "../../../utils/questions";
import { shuffleArray, takeFirst } from "../../../../js/utils/arrayUtils";

function Game() {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.IDLE);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(null);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  useEffect(() => {
    if (gameStatus === GAME_STATUS.LOADING) {
      const filteredQuestions = getFilteredQuestions(questions, settings);
      const shuffledQuestions = shuffleArray(filteredQuestions);
      const selectedQuestions = takeFirst(shuffledQuestions, settings.numQuestions);

      setQuizQuestions(selectedQuestions);
      setCurrentQuestionIndex(0);
      setScore(0);
      setGameStatus(GAME_STATUS.PLAYING);
    }
  }, [gameStatus, settings]);

  const handleApplySettings = (newSettings) => {
    setSettings(newSettings);
    setGameStatus(GAME_STATUS.LOADING);
  };

  return (
    <div className="game">
      <h1 className="game__title">Quiz Game</h1>

      {gameStatus === GAME_STATUS.IDLE && (
        <GameSettings onApply={handleApplySettings} />
      )}

      {gameStatus === GAME_STATUS.PLAYING && quizQuestions.length > 0 && (
        <>
          <GameInfo 
            currentQuestion={currentQuestionIndex + 1}
            totalQuestions={quizQuestions.length}
            score={score}
          />

          <Question
            question={currentQuestion.question}
            answers={currentQuestion.answers}
          />
        </>
      )}
    </div>
  );
}

export default Game;
