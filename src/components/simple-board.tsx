import Square from "./square";
import calculateWinner from "../functions/calculate-winner";

interface SimpleBoardProps {
  firstPlayerTurn: boolean;
  squares: Array<string>;
  onPlay(nextSquares: Array<string>): void;
}

interface Winner {
  winner: string;
  winningSquares: number[];
}

function SimpleBoard(props: SimpleBoardProps) {
  const squares = props.squares;
  const winner: Winner | null = calculateWinner({ squares });

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
  if (winner?.winner === "X" || winner?.winner === "O") {
    gameStatus = "The winner is: " + winner.winner;
  } else if (winner?.winner === "tie") {
    gameStatus = "The game ended in a tie";
  } else {
    gameStatus = "Next player is: " + (props.firstPlayerTurn ? "X" : "O");
  }

  let board: JSX.Element[] = [];
  for (let i: number = 0; i < 3; i++) {
    let boardRow: JSX.Element[] = [];
    for (let j: number = i * 3; j < i * 3 + 3; j++) {
      let winningMark: boolean = false;
      if (winner?.winningSquares.includes(j)) winningMark = true;
      boardRow.push(
        <Square
          key={j + "square"}
          value={squares[j]}
          num={j}
          onSquareClick={handleSquareClick}
          winningMark={winningMark}
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
