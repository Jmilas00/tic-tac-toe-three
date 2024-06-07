interface MovesProps {
  history: Array<Array<string>>;
  squares: Array<string>;
  move: number;
  jumpTo(nextMove: number): void;
}

function Moves(props: MovesProps) {
  const squares: Array<string> = props.squares;
  const move: number = props.move;
  const jumpTo = props.jumpTo;
  const moves: JSX.Element[] = props.history.map((squares, move) => {
    let description: string;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to the start of the game";
    }
    return (
      <>
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
      </>
    );
  });

  return moves;
}

export default Moves;
