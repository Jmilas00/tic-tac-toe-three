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

  let board: JSX.Element[] = [];
  for (let i: number = 0; i < 3; i++) {
    let boardRow: JSX.Element[] = [];
    for (let j: number = i * 3; j < i * 3 + 3; j++) {
      boardRow.push(
        <Square
          key={j + "square"}
          value={squares[j]}
          num={j}
          onSquareClick={handleSquareClick}
        />
      );
    }
    board.push(
      <div key={i + "row"} className="board-row">
        {boardRow}
      </div>
    );
  }

  return (
    <>
      <div className="game-status">{gameStatus}</div>
      {board}
    </>
  );
}

export default SimpleBoard;
