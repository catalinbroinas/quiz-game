import { useState } from "react";
import GameSettings from "./GameSettings/GameSettings";
import Question from "./Question";
import {
  DEFAULT_SETTINGS,
  GAME_STATUS
} from "../../../constants/quizOptions";

function Game() {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.IDLE);

  const handleApplySettings = (newSettings) => {
    setSettings(newSettings);
    setGameStatus(GAME_STATUS.PLAYING);
  };

  return (
    <div className="game">
      <h1 className="game__title">Quiz Game</h1>

      {gameStatus === GAME_STATUS.IDLE && (
        <GameSettings onApply={handleApplySettings} />
      )}
    </div>
  );
}

export default Game;
