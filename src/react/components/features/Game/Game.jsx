import { useState } from "react";
import GameSettings from "./GameSettings/GameSettings";
import Question from "./Question";
import { DEFAULT_SETTINGS } from "../../../constants/quizOptions";

function Game() {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
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
