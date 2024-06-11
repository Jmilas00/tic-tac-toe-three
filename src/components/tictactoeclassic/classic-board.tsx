import calculateWinner from "../../functions/calculate-winner";
import Board from "../board";

interface SimpleBoardProps {
  firstPlayerTurn: boolean;
  squares: Array<string>;
  onPlay(nextSquares: Array<string>): void;
}

interface Winner {
  winner: string;
  winningSquares: number[];
}

function ClassicBoard(props: SimpleBoardProps) {
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

  return (
    <>
      <div className="game-status">{gameStatus}</div>
      <Board
        winningSquares={winner?.winningSquares}
        handleSquareClick={handleSquareClick}
        squares={squares}
      />
    </>
  );
}

export default ClassicBoard;
