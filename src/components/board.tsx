import Square from "./square";

interface BoardProps {
  initialSquare?: number;
  winningSquares: number[] | undefined;
  squares: string[];
  handleSquareClick(squareNum: number): void;
}

function Board(props: BoardProps) {
  let board: JSX.Element[] = [];
  const initialSquare: number = props.initialSquare ? props.initialSquare : 0;
  for (let i: number = initialSquare; i < initialSquare + 3; i++) {
    let boardRow: JSX.Element[] = [];
    for (let j: number = i * 3; j < i * 3 + 3; j++) {
      let winningMark: boolean = false;
      if (props.winningSquares?.includes(j)) winningMark = true;
      boardRow.push(
        <Square
          key={j + "square"}
          value={props.squares[j]}
          num={j}
          onSquareClick={props.handleSquareClick}
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

  return <>{board}</>;
}

export default Board;
