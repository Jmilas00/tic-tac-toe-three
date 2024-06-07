import { useState } from "react";
import SimpleBoard from "./simple-board";
import Moves from "./moves";

function Game() {
  const [history, setHistory] = useState<Array<Array<string>>>([
    Array(9).fill(null),
  ]);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const firstPlayerTurn = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: Array<string>): void {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number): void {
    setCurrentMove(nextMove);
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
          <ol>
            <Moves
              history={history}
              squares={currentSquares}
              move={currentMove}
              jumpTo={jumpTo}
            />
          </ol>
        </div>
      </div>
    </>
  );
}

export default Game;
