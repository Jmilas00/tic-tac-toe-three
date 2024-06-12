import calculateWinner3D from "../../functions/calculate-winner-3d";
import Board from "../board";

interface Board3DProps {
  firstPlayerTurn: boolean;
  squares: Array<string>;
  onPlay(nextSquares: Array<string>): void;
}

interface Winner {
  winner: string;
  winningSquares: number[];
}

function Board3D(props: Board3DProps) {
  const squares = props.squares;
  const winner: Winner | null = calculateWinner3D({ squares });

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
        squares={squares.slice(0, 8)}
      />
      <Board
        winningSquares={winner?.winningSquares}
        handleSquareClick={handleSquareClick}
        squares={squares.slice(9, 17)}
        initialSquare={9}
      />
      <Board
        winningSquares={winner?.winningSquares}
        handleSquareClick={handleSquareClick}
        squares={squares.slice(18, 26)}
        initialSquare={18}
      />
    </>
  );
}

export default Board3D;
