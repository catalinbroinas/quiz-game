import { useState, useEffect } from "react";

import GameSettings from "./GameSettings/GameSettings";
import GameInfo from "./GameInfo";
import GameQuestion from "./GameQuestion";
import GameResult from "./GameResult";

import { DEFAULT_SETTINGS } from "../../../config/quizConfig";
import { GAME_STATUS } from "../../../constants/gameConstants";
import questions from "../../../data/questions";

import { getFilteredQuestions } from "../../../utils/questions";
import { shuffleArray, takeFirst } from "../../../../js/utils/arrayUtils";

function Game() {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.IDLE);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const toggleShowResult = () => setShowResult(prev => !prev);

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

  const handleSubmitAnswer = (answerIndex) => {
    if (answerIndex == null) return;
    
    const correctAnswer = quizQuestions[currentQuestionIndex].correctAnswer

    // Check answer
    if (!showResult) {
      if (answerIndex === correctAnswer) {
        setScore(prev => prev + 1);
      }

      toggleShowResult();
      return;
    }

    // Next
    const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;
    isLastQuestion 
      ? setGameStatus(GAME_STATUS.END)
      : setCurrentQuestionIndex(prev => prev + 1);
      
    setSelectedAnswer(null);
    toggleShowResult();
  };

  const handleResetGame = () => {
    setSettings(DEFAULT_SETTINGS);
    setQuizQuestions([]);
    setCurrentQuestionIndex(0);
    setScore(null);
    setShowResult(false);
    setGameStatus(GAME_STATUS.IDLE);
  };

  const handlePlayAgain = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setGameStatus(GAME_STATUS.PLAYING);
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

          <GameQuestion
            question={currentQuestion.question}
            answers={currentQuestion.answers}
            correctAnswer={currentQuestion.correctAnswer}
            selectedAnswer={selectedAnswer}
            showResult={showResult}
            isLastQuestion={currentQuestionIndex === quizQuestions.length - 1}
            onAnswerChange={setSelectedAnswer}
            onSubmit={handleSubmitAnswer}
          />
        </>
      )}

      {gameStatus === GAME_STATUS.END && (
        <GameResult
          questions={quizQuestions.length}
          score={score}
          onReset={handleResetGame}
          onPlayAgain={handlePlayAgain}
        />
      )}
    </div>
  );
}

export default Game;
