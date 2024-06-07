import { useState } from "react";
import SimpleBoard from "./simple-board";

function Game() {
  const [firstPlayerTurn, setFirstPlayerTurn] = useState<boolean>(true);
  const [history, setHistory] = useState<Array<Array<string>>>([
    Array(9).fill(null),
  ]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares: Array<string>) {
    setHistory([...history, nextSquares]);
    setFirstPlayerTurn(!firstPlayerTurn);
  }

  return (
    <>
      <div className="game">
        <div className="game-board">
          <SimpleBoard
            firstPlayerTurn={firstPlayerTurn}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        <div className="game-info">
          <ol>{/*TODO*/}</ol>
        </div>
      </div>
    </>
  );
}

export default Game;
