import { useState } from "react";
import Square from "./square";

function SimpleBoard() {
  const [squares, setSquares] = useState<Array<string>>(Array(9).fill(null));

  function handleSquareClick(squareNum: number): void {
    const nextSquares = squares.slice();
    nextSquares[squareNum] = "X";
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} num={0} onSquareClick={handleSquareClick} />
        <Square value={squares[1]} num={1} onSquareClick={handleSquareClick} />
        <Square value={squares[2]} num={2} onSquareClick={handleSquareClick} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} num={3} onSquareClick={handleSquareClick} />
        <Square value={squares[4]} num={4} onSquareClick={handleSquareClick} />
        <Square value={squares[5]} num={5} onSquareClick={handleSquareClick} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} num={6} onSquareClick={handleSquareClick} />
        <Square value={squares[7]} num={7} onSquareClick={handleSquareClick} />
        <Square value={squares[8]} num={8} onSquareClick={handleSquareClick} />
      </div>
    </>
  );
}

export default SimpleBoard;
