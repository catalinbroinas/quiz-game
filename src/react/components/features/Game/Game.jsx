import GameSettings from "./GameSettings/GameSettings";
import Question from "./Question";

function Game() {
  return (
    <div className="game">
      <h1 className="game__title">Quiz Game</h1>

      <GameSettings />
      <Question />
    </div>
  );
}

export default Game;
