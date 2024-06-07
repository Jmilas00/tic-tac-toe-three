interface MovesProps {
  history: Array<Array<string>>;
  jumpTo(nextMove: number): void;
}

function Moves(props: MovesProps) {
  const jumpTo = props.jumpTo;
  const moves: JSX.Element[] = props.history.map((squares, move) => {
    let description: string;
    if (move === props.history.length - 1) {
      description = "You are at move#" + move;
      return <li key={move}>{description}</li>;
    } else if (move > 0) {
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
