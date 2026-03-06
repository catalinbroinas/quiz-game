import { useState } from "react";
import GameSettings from "./GameSettings/GameSettings";
import Question from "./Question";

function Game() {
  const [settings, setSettings] = useState({
    numQuestions: 0,
    difficulty: undefined,
    category: undefined
  });
  const [gameStatus, setGameStatus] = useState('idle');

  const handleApplySettings = (newSettings) => {
    setSettings(newSettings);
    setGameStatus('playing');
  };

  return (
    <div className="game">
      <h1 className="game__title">Quiz Game</h1>

      {gameStatus === 'idle' && (
        <GameSettings onApply={handleApplySettings} />
      )}
    </div>
  );
}

export default Game;
