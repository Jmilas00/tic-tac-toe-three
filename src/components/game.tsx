import { useState } from "react";
import SimpleBoard from "./simple-board";
import GameInfo from "./game-info";

function Game() {
  const [history, setHistory] = useState<Array<Array<string>>>([
    Array(9).fill(null),
  ]);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const [ascendingHistory, setAscendingHistory] = useState<boolean>(false);
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
          <SimpleBoard
            firstPlayerTurn={firstPlayerTurn}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        <GameInfo
          history={history}
          jumpTo={jumpTo}
          ascendingHistory={ascendingHistory}
          setAscendingHistory={setAscendingHistory}
        />
      </div>
    </>
  );
}

export default Game;
