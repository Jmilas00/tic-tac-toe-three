interface MovesProps {
  history: Array<Array<string>>;
  ascendingHistory: boolean;
  jumpTo(nextMove: number): void;
}

interface Description {
  text: string;
  row: number;
  col: number;
  player: string;
}

function Moves(props: MovesProps) {
  const jumpTo = props.jumpTo;
  const moves: JSX.Element[] = props.history.map((squares, move) => {
    let description: Description = {
      text: "",
      row: 0,
      col: 0,
      player: "",
    };
    for (let i: number = 0; i < squares.length; i++) {
      if (move > 0 && squares[i] !== props.history[move - 1][i]) {
        description.col = (i % 3) + 1;
        description.row = Math.trunc(i / 3 + 1);
        description.player = props.history.length % 2 === 0 ? "X" : "O";
      }
    }

    if (move === props.history.length - 1) {
      description.text = "You are at move#" + move;
    } else if (move > 0) {
      description.text = "Go to move #" + move;
    } else {
      description.text = "Go to the start of the game";
    }
    return (
      <>
        <li key={move}>
          {move === props.history.length - 1 ? (
            description.text +
            " Row: " +
            description.row +
            " Col: " +
            description.col +
            " Player: " +
            description.player
          ) : (
            <button onClick={() => jumpTo(move)}>{description.text}</button>
          )}
        </li>
      </>
    );
  });
  if (props.ascendingHistory) {
    moves.reverse();
  }
  return moves;
}

export default Moves;
