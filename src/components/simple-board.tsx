import Square from "./square";
import calculateWinner from "../functions/calculate-winner";

interface SimpleBoardProps {
  firstPlayerTurn: boolean;
  squares: Array<string>;
  onPlay(nextSquares: Array<string>): void;
}

function SimpleBoard(props: SimpleBoardProps) {
  const squares = props.squares;
  const winner: string | null = calculateWinner({ squares });

  function handleSquareClick(squareNum: number): void {
    if (squares[squareNum] || winner) {
      return;
    }
    const nextSquares = squares.slice();
    if (props.firstPlayerTurn) {
      nextSquares[squareNum] = "X";
    } else {
      nextSquares[squareNum] = "O";
    }
    props.onPlay(nextSquares);
  }

  let gameStatus: string;
  if (winner) {
    gameStatus = "The winner is: " + winner;
  } else {
    gameStatus = "Next player is: " + (props.firstPlayerTurn ? "X" : "O");
  }

  return (
    <>
      <div className="game-status">{gameStatus}</div>
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
