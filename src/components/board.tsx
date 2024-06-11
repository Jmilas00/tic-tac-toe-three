import Square from "./square";

interface BoardProps {
  winningSquares: number[] | undefined;
  squares: string[];
  handleSquareClick(squareNum: number): void;
}

function Board(props: BoardProps) {
  let board: JSX.Element[] = [];
  for (let i: number = 0; i < 3; i++) {
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
