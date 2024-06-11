import { useState } from "react";
import GameInfo from "../game-info";
import Board3D from "./board3d";

function Game3D() {
  const [history, setHistory] = useState<Array<Array<string>>>([
    Array(27).fill(null),
  ]);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const firstPlayerTurn: boolean = currentMove % 2 === 0;
  const currentSquares: string[] = history[currentMove];

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
          <Board3D
            firstPlayerTurn={firstPlayerTurn}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        <GameInfo history={history} jumpTo={jumpTo} />
      </div>
    </>
  );
}

export default Game3D;
