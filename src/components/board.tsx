import Square from "./square";

interface BoardProps {
  initialSquare?: number;
  winningSquares: number[] | undefined;
  squares: string[];
  handleSquareClick(squareNum: number): void;
}

function Board(props: BoardProps) {
  console.log(props.squares);
  console.log(props.initialSquare);

  let board: JSX.Element[] = [];
  const initialSquare: number = props.initialSquare ? props.initialSquare : 0;
  for (let i: number = 0; i < 3; i++) {
    let boardRow: JSX.Element[] = [];
    for (let j: number = i * 3; j < i * 3 + 3; j++) {
      let winningMark: boolean = false;
      const currentSquare: number = j + initialSquare;
      if (props.winningSquares?.includes(currentSquare)) winningMark = true;
      boardRow.push(
        <Square
          key={currentSquare + "square"}
          value={props.squares[currentSquare]}
          num={currentSquare}
          onSquareClick={props.handleSquareClick}
          winningMark={winningMark}
        />
      );
    }
    board.push(
      <div
        key={i + Math.trunc(initialSquare / 3) + "row"}
        className="board-row"
      >
        {boardRow}
      </div>
    );
  }

  return <>{board}</>;
}

export default Board;
