interface calculateWinnerProps {
  squares: Array<string>;
}

const calculateWinner = (props: calculateWinnerProps) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      props.squares[a] &&
      props.squares[a] === props.squares[b] &&
      props.squares[a] === props.squares[c]
    ) {
      return { winner: props.squares[a], winningSquares: [a, b, c] };
    } else if (props.squares.filter((square) => square === null).length === 0) {
      return { winner: "tie", winningSquares: [] };
    }
  }
  return null;
};

export default calculateWinner;
